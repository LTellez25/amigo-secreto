// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = []; // Arreglo para guardar los nombres

function agregarAmigo() {
    let input = document.getElementById("amigo"); // Obtener el input
    let amigo = input.value.trim(); // Obtener el valor y quitar espacios extra
    let lista = document.getElementById("listaAmigos");

    if (amigo) { // Verificar que no esté vacío
        nombres.push(amigo); // Agregar al arreglo

        let nuevoItem = document.createElement("li");
        nuevoItem.innerText = amigo;
        lista.appendChild(nuevoItem); // Agregar a la lista en la página

        console.log(nombres); // Mostrar en consola
        input.value = ""; // Limpiar el input
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function sortearAmigo() {
    if (nombres.length === 0) {
        console.log("El arreglo está vacío, agrega nombres primero.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let nombreSeleccionado = nombres[indiceAleatorio];

    console.log("Nombre seleccionado:", nombreSeleccionado);
    
    document.getElementById("resultado").innerText = nombreSeleccionado;

    return nombreSeleccionado;
}



