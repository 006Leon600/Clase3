const path = require('path');
console.log(path);

// Crea una ruta
const fileJoin = path.join('consumible','/propiedades','etc.js');
console.log(fileJoin);

// Identificamos la base
const fileBasename = path.basename(fileJoin);
console.log(fileBasename);

// Ver rutas sin archivos
const fileDirname = path.dirname(fileJoin);
console.log(fileDirname);

// Ruta en forma de objeto con definiciones 
const fileParse = path.parse(fileJoin);
console.log(fileParse);

// La ruta del sistema con la ruta proporcionada
const fileResolve = path.resolve(fileJoin);
console.log(fileResolve);