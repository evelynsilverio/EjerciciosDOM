const div = document.getElementById('cuadro');
const ancho = document.getElementById('ancho');
const alto = document.getElementById('alto');
const sombra = document.getElementById('sombra');
const borde = document.getElementById('borde');
const color = document.getElementById('color');

ancho.addEventListener('input', function() {
    div.style.width = `${ancho.value}px`;
});
alto.addEventListener('input', function() {
    div.style.height = `${alto.value}px`;
});
sombra.addEventListener('input', function() {
    div.style.boxShadow = `0px 4px ${sombra.value}px rgb(156, 36, 148)`;
});
borde.addEventListener('input', function() {
    div.style.borderRadius = `${borde.value}px`;
});
//para actualizar el color
function actualizar() {
    const hue = color.value;
    div.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
}
color.addEventListener('input', actualizar);

