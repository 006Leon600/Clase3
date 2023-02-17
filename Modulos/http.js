const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 3000;

http.createServer((reques,response) =>{
    if (reques.url === '/home') {
        response.write(fs.readFileSync('./Modulos/texto.html','utf-8')
        )
        return response.end();
    }

    if (reques.url === '/'){
    response.write('inicio de proyecto');
    return response.end()
    }


}).listen(port, host, () => {
    console.log(`Server is rinnunununu on http://${host}:${port}`)
});