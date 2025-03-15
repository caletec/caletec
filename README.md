## ESSE É O SITE CALETEC

from flask import Flask, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

def buscar_noticias():
    url = "https://news.google.com/rss?hl=pt-BR&gl=BR&ceid=BR:pt-419"
    response = requests.get(url)
    if response.status_code != 200:
        return []

    soup = BeautifulSoup(response.content, "xml")
    noticias = []

    for item in soup.find_all("item")[:5]:
        titulo = item.title.text if item.title else "Sem título"
        link = item.link.text if item.link else ""
        descricao = item.description.text if item.description else "Sem descrição"
        noticias.append({"titulo": titulo, "link": link, "descricao": descricao})

    return noticias

@app.route("/noticias", methods=["GET"])
def get_noticias():
    noticias = buscar_noticias()
    return jsonify(noticias)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
