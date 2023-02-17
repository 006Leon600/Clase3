const fs = require('fs');
const os=require('os');



//

let cpu=os.cpus().slice(0,1).map((registro)=> registro.times);

const conversionRamDispoble=()=>{return 1e-9*os.freemem()}
const conversionTotalRam=()=>{return 1e-9*os.totalmem()}
const objetoOS={
    ramDispoble:os.freemem(),
    totalRam:os.totalmem(),
    cpu,
    conversionRamDispoble,
    conversionTotalRam
}

fs.writeFileSync('./Modulos/objetoOS.txt',`Ram disponible ${objetoOS.conversionRamDispoble()} gb\nRam total ${objetoOS.conversionTotalRam()} gb\ninformacion del sistme : usuario:${cpu[0].user}, sys:${cpu[0].sys}, nice:${cpu[0].nice}, idle:${cpu[0].idle}, irq:${cpu[0].irq}`);




// Crear un archivo

// fs.writeFile('data1.txt','Leon pruebaaaa',(error)=>{
//     if (error) {
//         console.log(`error: ${error}`); 
//     }
// });

// agregar de uno a uno 

// const hola = `1\n`;
// fs.writeFileSync('../data/tercero.js', hola , {
//     flag: 'a',
// })    

// Leer un archivo

// fs.readFile('data1.txt','utf8',(error,data)=>{
// if (!error) {
//     console.log(data);
// }else{
//     console.log(`error: ${error}`);
// }
// });

// Cambiar nombre del archivo

// fs.rename('data1.txt','dataleon.txt',(error,data)=>{
//     if (!error) {
//         console.log('renombrado');
//     }else{
//         console.log(`error: ${error}`);
//     }
// });

// Añadir contenido al archivo

// fs.appendFile('dataleon.txt','\nhola humdo',(error,data)=>{
//     if (!error) {
//         console.log('Actualizado');
//     }else{
//         console.log(`error: ${error}`);
//     }
// });


// Crear y remplaza el contenido
// const n = "hola"
// fs.writeFileSync('../data/tercero.js',n)

// Crear una copia de un archivo

// fs.createReadStream('dataleon.txt').pipe(fs.WriteStream('datacopia.txt'),(error,data)=>{
//     if (!error) {
//         console.log('Duplicado Correctamente');
//     }else{
//         console.log(`error: ${error}`);
//     }
// });

// Eliminar un archivo

// fs.unlink('dataleon.txt',(error)=>{
//     if (error) {
//         console.log(`error: ${error}`);
//     }
// });

// Listar archivos de una carpeta

// fs.readdir('./',(error, archivos)=>{
//     archivos.forEach(archivos   =>{
//     console.log(archivo);
//     })
// })


