function calcularPromedio(lista) {
  function sumarTodosLosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaLista = lista.reduce(sumarTodosLosElementos);
  const promedio = sumaLista / lista.length;
  console.log(promedio);
  return promedio;
}