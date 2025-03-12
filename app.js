// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombre = document.getElementById('amigo');
let amigos = []; 
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');


function agregarAmigo   () {
    if (nombre.value === '') {
        alert('Debes ingresar un nombre');
        return;
    }
    if (amigos.includes(nombre.value)) {
        alert('El nombre ya fue ingresado');
        return;
    }

    amigos.push(nombre.value);
    listaAmigos.innerHTML += nombre.value + '<br>';
    
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debes ingresar al menos dos amigos');
        return;
    }

    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.textContent = ('El amigo sorteado es: ' + amigoSecreto);
}