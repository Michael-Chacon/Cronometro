const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");
const btnIniciar = document.querySelector(".btnIniciar");
const btnReiniciar = document.querySelector(".btnReiniciar");
let s = 0;
let m = 0;
let h = 0;
let llamado;

btnIniciar.addEventListener("click", repetidor);
btnReiniciar.addEventListener("click", reiniciar);

function repetidor() {
  btnIniciar.classList.toggle("activo"); // Agrego una clase para identificar cuando el cronometro esta pausado o activo
  let estado = btnIniciar.classList.contains("activo");

  // si esta activo empieza el conteo
  if (estado) {
    btnIniciar.src = "storage/img/pause.png"; // Cambiar la img del boton
    llamado = setInterval(() => {
      s++;
      s == 60 ? m++ : "";
      s == 60 ? (s = 0) : "";
      m == 60 ? h++ : "";
      m == 60 ? (m = 0) : "";
      // mostrar los tiempos en el html
      segundos.textContent = s <= 9 ? `0${s}` : s;
      minutos.textContent = m <= 9 ? `0${m}` : m;
      horas.textContent = h <= 9 ? `0${h}` : h;
    }, 1000);
  } else {
    // si no existe la clase activo pauso el cronometro y cambio el icono
    btnIniciar.src = "storage/img/play.png";
    clearInterval(llamado);
  }
}

// Reseteo el valor de las horas, minutos y segundos y los muestro en el html
function reiniciar() {
  clearInterval(llamado);
  btnIniciar.classList.remove("activo");
  btnIniciar.src = "storage/img/play.png";
  h = 0;
  m = 0;
  s = 0;
  segundos.textContent = "00";
  minutos.textContent = "00";
  horas.textContent = "00";
}
console.log(llamado);
