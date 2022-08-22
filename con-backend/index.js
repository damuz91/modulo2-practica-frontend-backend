function sumar(){
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  fetch('https://ejemplo-backend-js.herokuapp.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      num1: num1,
      num2: num2
    })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("resultado").innerHTML = data;
  }
  ).catch(err => {
    alert("Error: " + err);
  })
}