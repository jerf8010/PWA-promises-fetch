const retornaTrue = () => {
    return true;
}

function sumarLento( numero ){

    return new Promise( function( resolve, reject ){

        setTimeout( function() {

            resolve( numero + 1 );
            // reject( 'Sumar Lento fallo' ); 

        }, 800)
    })
    
}

let sumarRapido = ( numero ) => {
    return new Promise( ( resolve, reject ) => {

        setTimeout( () => {
            resolve( numero + 1 );
        }, 300)
    })
}

let cosas = [sumarLento(5), 
            sumarRapido(10), 
            true, 
            'hola mundo',
            retornaTrue() ];

Promise.all( cosas )
    .then(console.log)
    .catch( console.log ) // Si una promesa falla todo falla
/* sumarLento( 5 ).then( console.log )
sumarRapido( 10 ).then( console.log ) */