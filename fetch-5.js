
fetch('https://reqres.in/api/users/10000')
    .then( resp => {

        if ( resp.ok ){
            return resp.json()
        } else {
            throw new Error('No existe el usuario ')
        }
       
       

        /* resp.clone().json()
        .then( usuario => {
            console.log( usuario.data );
        });

        resp.json().then( usuario => {
            console.log( usuario.data );
        }); */


    })
        .then( console.log )
        .catch( error => {
            console.log('Error en la peticion');
            console.log(error)
        })
   

