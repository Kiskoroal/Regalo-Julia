//Se encarga de crear los emoticonos del fondo
function crearCarta() {
    const cont = document.getElementById("content");
    const carta = document.createElement("div");
    carta.innerHTML = "💌";
    carta.classList.add("cartas");
    carta.style.left = Math.random() * 100 + "vw";
    carta.style.top = "100vh";
    carta.style.fontSize = Math.random() * 20 + 10 + "px";
    carta.style.animationDuration = Math.random() * 3 + 2 + "s";
    cont.appendChild(carta);
    setTimeout(() => carta.remove(), 4000);
}
setInterval(crearCarta, 500);

//Valida la contraseña
function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "malta"; 

    if (password.toLowerCase() === correctPassword) {
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        alert("Contraseña incorrecta. Inténtelo de nuevo. 💔");
    }
}

//Animación carta
const sobre = document.getElementById('sobre');
    const solapa = document.getElementById('solapa');
    const carta = document.getElementById('carta');
    let abierta = false;

    sobre.addEventListener('click', () => {
      toggleSobre();
    });

    // Permitir apertura con teclado (Enter o Espacio)
    sobre.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // Prevenir scroll accidental
        toggleSobre();
      }
    });

    function toggleSobre() {
      abierta = !abierta;
      if (abierta) {
        solapa.style.transform = 'translateY(-150%)';
        carta.style.opacity = '1';
        carta.style.transform = 'translateY(0)';
      } else {
        solapa.style.transform = 'translateY(0)';
        carta.style.opacity = '0';
        carta.style.transform = 'translateY(30%)';
      }
    }