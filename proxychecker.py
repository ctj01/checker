from proxy_checker import  ProxyChecker
from concurrent import futures
from flask import Flask, request, render_template, send_file
import requests


app = Flask(__name__)

def check_proxy_(proxy):
    checker = ProxyChecker() 
    x = checker.check_proxy(proxy)
    if x != False:
        return proxy

@app.route('/') 
def index():
    return render_template('index.html')

@app.route('/', methods=["POST"])

def getproxy_():
    proxy = request.form.get('proxy-container')
    if proxy is not None:
        lista = proxy.split()
        executor = futures.ThreadPoolExecutor(max_workers=25)
        x = []
        fin = ""
        for i in lista:
            x.append(executor.submit(check_proxy_ , i))
        for r in futures.as_completed(x):
            print(r.result())
            if r.result() != None:
                fin += r.result() + "\n"


        return render_template('index.html', prox = fin)
 
    return ""



if __name__ == "__main__":
    app.run(debug=True)