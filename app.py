# app.py
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Welcome to DormDirect"

if __name__ == '__main__':
    app.run(debug=True)
