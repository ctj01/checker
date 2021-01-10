
const fetch = require('node-fetch')

function run() {
     
    await fetch("http://list.didsoft.com/get?email=cristianmt023@gmail.com&pass=a5zjmd&pid=http6500&showcountry=yes", { mode: 'no-cors',
                        'headers': {
                        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
                        'Access-Control-Allow-Methods': 'GET',
                        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
                        'Access-Control-Allow-Credentials': 'true',
                        'Content-Type': 'text/plain;charset=UTF-8',
                        'Content-Encoding': 'gzip',
                        }}).then(x => x.text()).then( x => console.log(x))
                    }
