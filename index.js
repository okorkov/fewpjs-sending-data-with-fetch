// Add your code here
function submitData(usersName, usersEmail) {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({'name': usersName, 'email': usersEmail})
  }
  return fetch('http://localhost:3000/users', config)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
    let pi = document.createElement('p')
    pi.innerHTML = object['id']
    document.body.appendChild(pi)
  })
  .catch(function(error) {
    alert("Unauthorized Access");
    let pi = document.createElement('p')
    pi.innerHTML = error.message;
    document.body.appendChild(pi)
  }); 
}