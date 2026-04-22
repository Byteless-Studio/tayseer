#!/usr/bin/env python3
"""
site/backend/server.py — serve the lecture site and accept signed content publishes.

Run:  python site/backend/server.py
Open: http://localhost:8000

Publish endpoint security
─────────────────────────
POST /api/publish requires an Ed25519 signature over the raw request body.

  Header:  X-Signature: <base64-encoded signature>
  Body:    raw JSON bytes

The server verifies using PUBLISH_PUBLIC_KEY from the environment.
The workflow signs using PUBLISH_PRIVATE_KEY (never sent to the server).
"""

import base64
import json
import os
import sys
from pathlib import Path
from dotenv import load_dotenv

from cryptography.exceptions import InvalidSignature
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PublicKey
from flask import Flask, abort, jsonify, request, send_file

FRONTEND = Path(__file__).parent.parent / "frontend"
CONTENT  = Path(__file__).parent.parent / "content"

app = Flask(__name__)
load_dotenv()  # Load environment variables from .env file if present

# ── key loading ────────────────────────────────────────────────────────────

def _load_public_key() -> Ed25519PublicKey:
    raw = os.environ.get("PUBLISH_PUBLIC_KEY", "")
    if not raw:
        print("ERROR: PUBLISH_PUBLIC_KEY not set.", file=sys.stderr)
        sys.exit(1)
    return Ed25519PublicKey.from_public_bytes(base64.b64decode(raw))

PUBLIC_KEY: Ed25519PublicKey | None = None

@app.before_request
def _ensure_key():
    global PUBLIC_KEY
    if PUBLIC_KEY is None:
        PUBLIC_KEY = _load_public_key()


def _verify_signature(body: bytes, sig_b64: str) -> bool:
    try:
        sig = base64.b64decode(sig_b64)
        PUBLIC_KEY.verify(sig, body)
        return True
    except (InvalidSignature, Exception):
        return False


# ── content helpers ────────────────────────────────────────────────────────

def load_all() -> list[dict]:
    CONTENT.mkdir(parents=True, exist_ok=True)
    lectures = []
    for path in sorted(CONTENT.glob("*.json")):
        try:
            lectures.append(json.loads(path.read_text(encoding="utf-8")))
        except Exception:
            pass
    lectures.sort(key=lambda v: v.get("published", ""), reverse=True)
    return lectures


def load_one(video_id: str) -> dict | None:
    path = CONTENT / f"{video_id}.json"
    if not path.exists():
        return None
    return json.loads(path.read_text(encoding="utf-8"))


# ── frontend routes ────────────────────────────────────────────────────────

@app.get("/")
def index():
    return send_file(FRONTEND / "index.html")


@app.get("/lecture/<video_id>")
def lecture(video_id: str):
    return send_file(FRONTEND / "lecture.html")


# ── API routes ─────────────────────────────────────────────────────────────

@app.get("/api/lectures")
def api_lectures():
    return jsonify(load_all())


@app.get("/api/lectures/<video_id>")
def api_lecture(video_id: str):
    lec = load_one(video_id)
    if lec is None:
        abort(404)
    return jsonify(lec)


@app.post("/api/publish")
def api_publish():
    sig = request.headers.get("X-Signature", "")
    if not sig:
        abort(401, "Missing X-Signature header.")

    body = request.get_data()
    if not _verify_signature(body, sig):
        abort(403, "Invalid signature.")

    try:
        data = json.loads(body)
    except json.JSONDecodeError:
        abort(400, "Request body must be valid JSON.")

    video_id = data.get("video_id", "").strip()
    if not video_id:
        abort(400, "Missing video_id field.")

    CONTENT.mkdir(parents=True, exist_ok=True)
    out = CONTENT / f"{video_id}.json"
    out.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[publish] saved {video_id}", flush=True)

    return jsonify({"ok": True, "video_id": video_id}), 201


if __name__ == "__main__":
    app.run(debug=True, port=8000)
