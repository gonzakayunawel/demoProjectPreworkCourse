alert("Hello World!");
var nombre = "Gonzalo Cayunao";
var altura = 172;
var concat = nombre + " " + altura;
var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
    `;

if(altura >= 190){
    datos.innerHTML = '<h1>Eres una persona alta</h1>';
}
