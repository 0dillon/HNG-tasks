from flask import Flask, Response
import requests
from datetime import datetime, timezone
import json
from collections import OrderedDict

app = Flask(__name__)

@app.route("/me", methods=["GET"])
def get_profile():
    try:
        response = requests.get("https://catfact.ninja/fact", timeout=5)
        if response.status_code == 200:
            cat_fact = response.json().get("fact", "No fact available at the moment.")
        else:
            cat_fact = "Could not fetch cat fact at the moment."
    except Exception:
        cat_fact = "Could not fetch cat fact at the moment."

    data = OrderedDict([
        ("status", "success"),
        ("user", OrderedDict([
            ("email", "dillonofili667@gmail.com"),
            ("name", "Dillon Ofili"),
            ("stack", "Python/Flask")
        ])),
        ("timestamp", datetime.now(timezone.utc).isoformat()),
        ("fact", cat_fact)
    ])

    return Response(
        json.dumps(data, indent=2),
        status=200,
        mimetype="application/json"
    )

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
