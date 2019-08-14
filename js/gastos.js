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
      arrayFamily[i] = {
        nombre: name,
        gastos: parseInt(gastos)
      }
    }

    console.log(arrayFamily);


    document.querySelector ('body').append(document.createElement('h1'));
    document.querySelector('h1').append(document.createTextNode('Reporte de gastos familiares'));


    var max = 0;
    var maxName = '';
    var min = 0;
    var minName = '';
    var totalGastos = 0;
    var arrayMensajes = [];
    for (var onePerson of arrayFamily) {
      if(max < onePerson.gastos){
        max = onePerson.gastos;
        maxName = onePerson.nombre;
        min = onePerson.gastos;
      }
      if(min > onePerson.gastos){
        min = onePerson.gastos;
        minName = onePerson.nombre;
      }
      totalGastos = totalGastos + onePerson.gastos;
      var promedio = (totalGastos / countFamily).toFixed(2);
    }
    arrayMensajes.push(maxName + ' fue el que más gastó: $ ' + max);
    arrayMensajes.push(minName + ' fue el que menos gastó: $ ' + min);
    arrayMensajes.push('El gasto total de la familia fue: $ ' + totalGastos);
    arrayMensajes.push('El gasto promedio de la familia fue: $ ' + promedio);

    document.querySelector ('body').append(document.createElement('ul'));
    var ul = document.querySelector ('ul');
    for (var i = 0; i < arrayMensajes.length; i++) {
      ul.append(document.createElement('li'));
    }
    var losLi = document.querySelectorAll ('li')
    for (var i = 0; i < losLi.length; i++) {
      losLi[i].append(arrayMensajes[i]);
      losLi[i].setAttribute('title', arrayMensajes[i]);
    }

    document.querySelector ('body').append(document.createElement('button'));
    document.querySelector('button').append(document.createTextNode('¿Nos pasamos del presupuesto?'));
    document.querySelector('button').onclick = function(){
      if (totalGastos > 1200) {
        alert('EL PRESUPUESTO FUE SUPERADO POR $ ' + (totalGastos - 1200));
      } else {
        alert('La familia está dentro de presupuesto');
      }
    };
  }
}
