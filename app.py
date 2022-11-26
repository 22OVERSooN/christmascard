from flask import Flask, request, render_template

# TO LOAD THE MODEL AND THE SCALER!
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')