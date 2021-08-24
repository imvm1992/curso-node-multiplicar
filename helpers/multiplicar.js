
const fs = require('fs');
var colors = require('colors');

const crearArchivo = async( base , listar, multiplicando ) => {

    try {
        let salida = ''; 
        let consola = ''; 

        for( let i = 1; i <= multiplicando; i++){

            let multiplicacion = base * i;

        salida +=  `${base} x ${i} = ${multiplicacion} \n`;
        consola +=  `${base} ${'x'.green} ${i} ${'='.green} ${multiplicacion} \n`;

        }
        //Creamos el listar -l 
        if(listar){

            console.log('====================='.green);
            console.log(`   TABLA DEL ${base} `.inverse);
            console.log('====================='.green);
            console.log(consola);
        }
        

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida); 

        return `tabla-${base}.txt`;

    } catch (error) {

        throw error;
        
    }
    
}

module.exports = {

    crearArchivo : crearArchivo

}