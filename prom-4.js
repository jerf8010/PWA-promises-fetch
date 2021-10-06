
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
            // resolve( numero + 1 );
            reject( 'Error en suma rapido' )
        }, 300)
    })
}

/* Promise.all([
    sumarLento(5),
    sumarRapido( 10 )
])
    .then( console.log ) */

// Devuelve la promesas que se resuelve primero
Promise.race([
    sumarLento(5),
    sumarRapido( 10 )
])
    .then( console.log )
    .catch( console.log )