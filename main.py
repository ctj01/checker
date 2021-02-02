from fastapi import FastAPI
from proxy_checker import  ProxyChecker
from concurrent import futures
import requests
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "http://127.0.0.1:5500",
    "http://localhost:8000",
    "http://localhost:8080",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
def check_proxy_(proxy):
    checker = ProxyChecker()
    x = checker.check_proxy(proxy)
    if x != False:
        return proxy

##@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/{proxies}")
async  def getproxy_(proxies : str):
    proxy = proxies
    if proxy is not None:
        lista = proxy.split(",")
        executor = futures.ThreadPoolExecutor(max_workers=25)
        x = []
        fin = ""
        for i in lista:
            x.append(executor.submit(check_proxy_ , i))
        for r in futures.as_completed(x):
            print(r.result())
            if r.result() != None:
                fin += r.result() + "\n"

    return fin
