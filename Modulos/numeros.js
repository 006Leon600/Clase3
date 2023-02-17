const fs = require('fs');

for (i = 1; i <= 100; i++){
    fs.writeFileSync('./Modulos/numeros.txt',`${i}\n` , {flag : 'a'});

}