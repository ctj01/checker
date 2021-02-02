//var _0x6d3e=["\x66\x6F\x72\x6D\x61\x2D\x67\x65\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x70\x72\x6F\x78\x69\x65\x73","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x74\x68\x65\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x6C\x69\x73\x74\x2E\x64\x69\x64\x73\x6F\x66\x74\x2E\x63\x6F\x6D\x2F\x67\x65\x74\x3F\x65\x6D\x61\x69\x6C\x3D\x63\x72\x69\x73\x74\x69\x61\x6E\x6D\x74\x30\x32\x33\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D\x26\x70\x61\x73\x73\x3D\x61\x35\x7A\x6A\x6D\x64\x26\x70\x69\x64\x3D\x68\x74\x74\x70\x36\x35\x30\x30\x26\x73\x68\x6F\x77\x63\x6F\x75\x6E\x74\x72\x79\x3D\x6E\x6F","\x73\x75\x62\x6D\x69\x74","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x70\x72\x6F\x78\x79\x2D\x6C\x69\x76\x65\x73","\x73\x65\x6C\x65\x63\x74","\x63\x6F\x70\x79","\x65\x78\x65\x63\x43\x6F\x6D\x6D\x61\x6E\x64"];f= document[_0x6d3e[1]](_0x6d3e[0]);function handleForm(_0x63b5x2){_0x63b5x2[_0x6d3e[2]](_0x6d3e[0]);texto= document[_0x6d3e[1]](_0x6d3e[3]);fetch(_0x6d3e[6])[_0x6d3e[5]]((_0x63b5x3)=>{return texto[_0x6d3e[4]]= _0x63b5x3})}f[_0x6d3e[8]](_0x6d3e[7],handleForm);function copy(){let _0x63b5x5=document[_0x6d3e[1]](_0x6d3e[9]);_0x63b5x5[_0x6d3e[10]]();document[_0x6d3e[12]](_0x6d3e[11])}

var proxies = document.getElementById("textare")

var proxiesresult = document.getElementById("proxy-lives");
var lista = ""
a = []
var validate = /\d+\n*/
proxies.addEventListener("input", () =>  {
    if (validate.test(proxies.value))
    {
        lista = proxies.value
        lista = lista.split("\n");
        lista = lista.join(",");
    }
    else {
        alert("incorrect format for proxies")
        proxies.value = ""
    }

})
let load = document.querySelector(".loader")
let boton = document.getElementById("submit")
.addEventListener("click", (e) => {
    e.preventDefault();
    if(lista != "" && lista.length > 0){
        load.style.display = "block"
        var result = fetch("http://127.0.0.1:8000/" + lista)
        .then( x => x.json())
        .then(x => { 
            proxiesresult.value = x;  load.style.display = "none"
                if(x == "")
                    alert("proxies doesn't work")
            })
    }
    else
        alert("No hay proxies ingresados")


})

function Copy() {
    proxiesresult.select();
    proxiesresult.setSelectionRange(0, 99999)
    document.execCommand("copy")
}
document.getElementById("copy").addEventListener("click", (e) =>  e.preventDefault())