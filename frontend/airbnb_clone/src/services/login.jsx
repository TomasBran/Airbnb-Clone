const apiUrl = 'http://localhost:8080/auth/';
//const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXRpYXNAZ21haWwuY29tIiwiaWF0IjoxNzAxMjkzMTU4LCJleHAiOjE3MDEyOTQ1OTh9.2KEngv1FB4IzsreTHQ7DUefCWizfn6-5GTVZux-9rb8';


// const postData = {
//     // Aquí coloca los datos que deseas enviar en el cuerpo de la solicitud POST
//     // Ejemplo:
//     key1: 'value1',
//     key2: 'value2'
// };

// const requestOptions = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//     },
//     body: JSON.stringify(postData)
// };

// fetch(apiUrl, requestOptions)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Manejar la respuesta exitosa aquí
//         console.log('Respuesta exitosa:', data);
//     })
//     .catch(error => {
//         // Manejar errores de la solicitud aquí
//         console.error('Hubo un problema con la solicitud:', error);
//     });'Authorization': `Bearer ${token}`


function login(jsonData) {
    
    fetch(apiUrl+'login', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'            
        },
      body: JSON.stringify(jsonData)

    }).then((token)=>{
        console.log(token)
    }).catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
    });
    
  }

export default login