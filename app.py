from flask import Flask,render_template
import pyodbc

def connect_database():
    conn = pyodbc.connect(
        "DRIVER={Microsoft Access Driver (*.mdb, *.accdb)}",
        r"DBQ=C:\Users\GabrielDoCarmoPereir\OneDrive - Academico - Secretaria do Estado da Educação de São Paulo\3A\brinquedin\brinquedin1.accdb"
    )
    

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")



if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000,debug=True)