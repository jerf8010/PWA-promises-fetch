
let img = document.querySelector('img');

fetch( 'img.jpg' )
    .then( resp => resp.blob() )
    .then( imagen => {
        // console.log( imagen )
        let imgPath = URL.createObjectURL( imagen );
        img.src = imgPath;
    });

