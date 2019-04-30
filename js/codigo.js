function anio() {
  let a = new Date().getFullYear();
  document.getElementById("anio").innerHTML = a;
}

function fechaHora() {
  let fecha = new Date();
  let dia, hora;
  let arr = new Array(7);
  arr[0] = "Domingo";
  arr[1] = "Lunes";
  arr[2] = "Martes";
  arr[3] = "Miércoles";
  arr[4] = "Jueves";
  arr[5] = "Viernes";
  arr[6] = "Sábado";

  dia = arr[fecha.getDay()];
  hora = fecha.getHours() + ':' + (fecha.getMinutes()<10?'0': '') + fecha.getMinutes();
  document.getElementById("fechaHora").innerHTML = "<strong>RESULTADO:</strong> Hoy es :" + dia + '. La hora actual es: ' + hora + '.';
}

function voltear() {
  let num;
  let numero = prompt("Por favor, introduzca un número.")
  if (numero == null || numero == "") {
    num = "No has puesto nada.";
  }
}