// Referencias a elementos del DOM
const lista = document.getElementById("lista");
const agregarBtn = document.getElementById("agregarBtn");
const borrarBtn = document.getElementById("borrarBtn");
const temaBtn = document.getElementById("temaBtn");

// Contador para nuevos elementos
let contador = 2;

// Agrega un nuevo elemento a la lista
agregarBtn.addEventListener("click", () => {
  const nuevo = document.createElement("li");
  nuevo.textContent =` Elemento ${contador}`;
  lista.appendChild(nuevo);
  contador++;
});

// Borra todos los elementos de la lista
borrarBtn.addEventListener("click", () => {
  lista.innerHTML = ""; // Limpia todo
});

// Cambia entre modo claro y oscuro
temaBtn.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
});
