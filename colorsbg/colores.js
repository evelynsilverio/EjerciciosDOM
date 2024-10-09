const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const azul = document.getElementById('azul');

// Para actualizar el color
function actualizarColor() {
    const valorRojo = parseInt(rojo.value, 10);
    const valorVerde = parseInt(verde.value, 10);
    const valorAzul = parseInt(azul.value, 10);

    // Para el color rgb
    const colorFinal = `rgb(${valorRojo}, ${valorVerde}, ${valorAzul})`;

    document.body.style.backgroundColor = colorFinal;
}

rojo.addEventListener('input', actualizarColor);
verde.addEventListener('input', actualizarColor);
azul.addEventListener('input', actualizarColor);
