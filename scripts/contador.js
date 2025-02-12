//Función encargada de contabilizar
function actualizarContador() {
    const fechaInicio = new Date("2024-06-01T01:00:00");
    const ahora = new Date();
    let diferencia = ahora - fechaInicio;
    
    let segundos = Math.floor(diferencia / 1000) % 60;
    let minutos = Math.floor(diferencia / (1000 * 60)) % 60;
    let horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    
    let tiempoTexto = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    let contadorDiv = document.getElementById("contador");
    contadorDiv.innerHTML = '';
    
    for (let char of tiempoTexto) {
        let span = document.createElement("span");
        span.classList.add("digit");
        span.innerText = char;
        contadorDiv.appendChild(span);
    }
}
setInterval(actualizarContador, 1000);
actualizarContador();

//Función encargada de crear emojis del fondo
function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.innerHTML = "❤️";
    corazon.classList.add("corazon");
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.top = "100vh";
    corazon.style.fontSize = Math.random() * 20 + 10 + "px";
    corazon.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(corazon);
    setTimeout(() => corazon.remove(), 4000);
}
setInterval(crearCorazon, 500);