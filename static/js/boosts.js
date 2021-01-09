f = document.getElementById("forma-get")
    function handleForm(event) {

        event.preventDefault("forma-get");
        texto = document.getElementById("proxies")
        fetch("http://list.didsoft.com/get?email=cristianmt023@gmail.com&pass=a5zjmd&pid=http6500&showcountry=no").then(x => texto.innerHTML = x)
    }
    f.addEventListener('submit', handleForm)
    function copy() {
    
    let textarea = document.getElementById("proxy-lives");
    textarea.select();
    document.execCommand("copy");
    }