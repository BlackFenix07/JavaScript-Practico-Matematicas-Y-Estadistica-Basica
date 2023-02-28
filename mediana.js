function esPar(lista) {
  return !(lista.length % 2);
}

function esImpar(lista) {
  return lista.length % 2;
}

function calcularMediana(lista) {
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
    const indiceMitad1ListaPar = lista.length / 2 - 1;
    const indiceMitad2ListaPar = lista.length / 2;
    // const mitad1ListaPar = lista[(lista.length / 2) - 1];
    // const mitad2ListaPar = lista[lista.length / 2];

    // lista[indiceMitad1ListaPar];
    // lista[indiceMitad2ListaPar];
    // [lista[indiceMitad1ListaPar], lista[indiceMitad2ListaPar]];
    // const listaMitades = [mitad1ListaPar, mitad2ListaPar];

    const listaMitades = [];
    listaMitades.push(lista[indiceMitad1ListaPar]);
    listaMitades.push(lista[indiceMitad2ListaPar]);

    const medianaListaPar = calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indiceMitadListaImpar = Math.floor(lista.length / 2);
    console.log(indiceMitadListaImpar);

    const medianaListaImpar = lista[indiceMitadListaImpar];
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
}

function calcularPromedio(lista) {
  let sumaLista = 0;
  
  for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
  }

  let promedio = sumaLista / lista.length;
  console.log(promedio);
  return promedio;
}