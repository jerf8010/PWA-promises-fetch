

let request = new XMLHttpRequest();

request.open('GET', 'https://reqres.in/api/users', true );
request.send(null);


request.onreadystatechange = ( state ) => {
    if( request.readyState === 4 ){

        let resp = request.response;
        let respObj = JSON.parse( resp );
        console.log(respObj.page);
    }
}