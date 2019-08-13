var estudiante = {
  nombre: 'Alejandro',
  curso: 'Fullstack',
  dni: 34577020,
  email: 'alejandrodaquila@dh.com',
}

var array = [];
var fromObjectToArray = function(unObjeto){
  for (var valor in unObjeto) {
    array.push(unObjeto[valor]);
  }
  console.log(array);
}

var cambiarColorDeFondoDelBody = function(color){
  if (color != 'green' || color != '#0f0' || color != '#00ff00') {
    document.querySelector('body').style.background = color;
    console.log('El cambio fue realizado');
  } else {
    console.log('El cambio no pudo ser realizado');
  }
}

var p = document.querySelectorAll('p');

var cambiarParrafos = function(){
  i = 1;
  y = 0;
  for (var unP of p) {
    if(i % 2 == 0){
      unP.style.color = 'red';
      unP.style.fontWeight = "900";
      unP.style.margin = 'auto';
    } else{
      y++;
    }
    i++;
  }
  console.log('Párrafos que no se vieron afectados: ' + y);
}

var enigma = ["l", 1, "a", 2, 2, 5, "p", 5, 7, 5, 3, "e", 6,
"r", 7, 6, 5, 3, 2, 1, "s", 9, 9, 9, 6, "e", 2, "v", 5, "e", 3, "r",
2, "a", 1, 6, 4, 1, 2, "n", 2, "c", 3, 5, 5, 5, 7, "i", 4, "a", 5,
2, 1, 3, "e", 6, "s", 7, "l", 4, "a", 3, "c", 2, 3, 1, 5, 3, 2, "l",
3, "a", 4, "v", 5, "e", 6];

var numeros = enigma.filter(function(numero){
  if (Number.isInteger(numero) == true) {
    return numero;
  }
})

var numero = 0;
for (var unNumero of numeros) {
  numero = numero + unNumero;
}

var letras = enigma.filter(function(letra){
  if (typeof letra == 'string') {
    return letra;
  }
})

var calle = '';
for (var unaLetra of letras) {
  calle = calle + unaLetra;
}

console.log(calle + ' ' + numero);
