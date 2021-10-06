

function sumarUno( numero ){

    var promesa = new Promise( function( resolve, reject ) {
        
        if ( numero >=  7 ){
            reject('El número es muy alto');
        }

        setTimeout( function() {
            resolve( numero + 1 )
        }, 800);

    });


    return promesa;
    
}


// Promise Hell
/* sumarUno( 5 ).then( ( nuevoNumero ) => {
    sumarUno( nuevoNumero ).then( (nuevoNumero2) => {
        console.log(nuevoNumer2o)
    })
});
 */

/* sumarUno( 5 ).then( nuevoNumero => {
    console.log( nuevoNumero )
    return sumarUno( nuevoNumero ); // Para usar then se debe regresar una promesa
})
.then( nuevoNumero => {
    console.log( nuevoNumero );
    return sumarUno( nuevoNumero );
})
.then( nuevoNumero => {
    console.log( nuevoNumero );
}) */

sumarUno( 5 )
    .then( sumarUno )
    .then( sumarUno )
    .then( sumarUno )
    .then( sumarUno )
    .then( sumarUno )
    .then( console.log )
    .catch( console.log )