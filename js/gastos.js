window.onload = function () {
  var result = confirm('¿Desea iniciar?');

  if (!result){
    document.querySelector ('body').append(document.createElement('h1'));
    document.querySelector('h1').append(document.createTextNode('Gracias por haber venido'));

    function redirect (){
      window.location = 'http://www.netflix.com';
    }

    setTimeout(redirect(), 5000)
  } else {

    countFamily = prompt ('Ingrese cantidad de integrantes de la familia:');
    while (isNaN(countFamily) || countFamily < 3) {
      countFamily = prompt ('El valor debe ser un número mayor a 3. Ingrese cantidad de integrantes de la familia:');
    }

    var arrayFamily = [];
    for (var i = 0; i < countFamily; i++) {
      name = prompt ('Ingrese nombre:').trim();
      while (name == '') {
        name = prompt ('El nombre no puede estar vacío. Ingrese nombre:').trim();
      }
      gastos = prompt ('Ingrese gastos:').trim();
      while (isNaN(gastos) || gastos == '') {
        gastos = prompt ('El valor debe ser un número. Ingrese gastos:').trim();
      }
      arrayFamily[i] = '{nombre: '+ name + ', gastos: ' + gastos + '},'
    }
    console.log(arrayFamily);
    
  }
}
