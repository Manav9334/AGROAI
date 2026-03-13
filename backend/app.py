from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"status": "error", "message": "No image uploaded"}), 400

    file = request.files["image"]

    # 🔎 Simulate leaf detection (for now)
    random_check = random.random()

    # 30% chance simulate non-leaf
    if random_check < 0.3:
        return jsonify({
            "status": "invalid",
            "message": "The uploaded image is not a plant leaf. Please try again."
        }), 200

    # Otherwise return prediction
    return jsonify({
        "status": "success",
        "name": "Potato Early Blight",
        "confidence": 92.7,
        "treatment": "Apply copper-based fungicide and improve ventilation."
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)