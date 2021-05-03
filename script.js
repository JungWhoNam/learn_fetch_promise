
// fetch('https://reqres.in/api/users/222')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('err', error));

// fetch('https://reqres.in/api/users/12')
//     .then(response => {
//         if (response.ok) {
//             return (response.json());
//         }
//         else {
//             throw new Error("fail fail fail");
//         }
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error));


// fetch('https://reqres.in/api/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'User 1'
//     })
// }).then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('err', error));