const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption: true,
                    describe:'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    default:false,
                    describe:'Muestra la tabla de multiplicar'
                })
                .option('m',{
                    alias:'multiplicando',
                    type:'number',
                    describe:'Es el multiplicando'
                })
                .check((argv, option) => {
                    if(isNaN( argv.b )){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                
                .argv;


module.exports = argv;