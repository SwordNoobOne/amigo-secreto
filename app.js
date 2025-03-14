// app.js
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const amigoInput = document.getElementById('amigo');
const amigos = [];
const botonSortear = document.querySelector('.button-draw'); //Variable para deshabilitar el boton sortear
const botonAgregar = document.querySelector('.button-add'); // Variable para deshabilitar el boton agregar
let sorteoRealizado = false; // Variable para controlar si se ha realizado el sorteo

//funcion para agregar amigos
function agregarAmigo() {
  const nombre = amigoInput.value.trim();
  if (nombre === "") {
    alert("Por favor, ingresa un nombre.");
    return;
  }
  if (amigos.includes(nombre)) {
    alert("Este nombre ya ha sido ingresado.");
    return;
  }
  if (nombre !== "") {
    amigos.push(nombre);
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = nombre;
    listaAmigos.appendChild(nuevoLi);
    amigoInput.value = ""; // Limpia el texto
  }
  
}


function sortearAmigo() {
  if (amigos.length < 2) { //verifica si al menos ahi 2 amigos agregados
    alert("Debes ingresar al menos dos amigos para el sorteo.");
    return;
  }

  // Genera un índice aleatorio dentro del rango del array de amigos
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtiene el nombre del amigo seleccionado aleatoriamente
  const amigoSeleccionado = amigos[indiceAleatorio];

  resultado.innerHTML = ""; // Limpia resultados anteriores

  const resultadoLi = document.createElement('li');
  resultadoLi.textContent = `El amigo seleccionado es: ${amigoSeleccionado}`;
  resultado.appendChild(resultadoLi);
  listaAmigos.innerHTML = ""; // Limpiar la lista de amigos en pantalla
  botonSortear.disabled = true; //deshabilita el boton "sortear"
  botonAgregar.disabled = true; // Deshabilitar el botón "Añadir"
  sorteoRealizado = true; // Indica que el sorteo se ha realizado
  
}

// Evento para agregar con Enter
amigoInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13 && !sorteoRealizado) { // Verifica si Enter y si el sorteo NO se ha realizado
    agregarAmigo();
  }
});