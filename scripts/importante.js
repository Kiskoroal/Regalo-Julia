document.querySelectorAll('.foto').forEach(foto => {
    foto.addEventListener('click', () => {
        foto.classList.toggle('girar'); 
    });
});

//Valida contraseña
function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "malta"; 

    if (password.toLowerCase() === correctPassword) {
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";
        document.getElementById("contenedorLogin").style.display = "none";
    } else {
        alert("Contraseña incorrecta. Inténtelo de nuevo. 💔");
    }
}