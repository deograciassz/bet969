from flask import Flask, render_template

app = Flask(__name__, template_folder="bet", static_folder="STATIC")

@app.route("/")
def inicio():
    return render_template("bet.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5500)