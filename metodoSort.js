function esPar(lista) {
  return !(lista.length % 2);
}

function esImpar(lista) {
  return lista.length % 2;
}

function calcularMediana(lista) {
  const lista = ordenarLista(listaDesordenada);
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
    const indiceMitad1ListaPar = lista.length / 2 - 1;
    const indiceMitad2ListaPar = lista.length / 2;
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

function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    // if (valorAcumulado > nuevoValor) {
    //   return 1;
    // } else if (valorAcumulado === nuevoValor) {
    //   return 0;
    // } else if (valorAcumulado < nuevoValor) {
    //   return -1;
    // }

    return valorAcumulado - nuevoValor; // De menor a mayor.
    // return nuevoValor - valorAcumulado; // De mayor a menor.  
    // return 10 - 5 -> 5;
    // return 5 - 5 -> 0;
    // return 5 - 10 -> -5;
  }

  // const lista = listaDesordenada.sort(ordenarListaSort);
  const lista = listaDesordenada.sort((a, b) => a - b);
  return lista;
}