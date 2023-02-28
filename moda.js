function esPar(lista) {
  return !(lista.length % 2);
}

function esImpar(lista) {
  return lista.length % 2;
}

function calcularModa(lista) {
  const listaCount = {};

  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];

    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }

  const listaArray = Object.entries(listaCount);
  const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
  const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
  const moda = listaMaxNumber[0];
  return moda;
}

function calcularMediana(listaDesordenada) {
  const lista = ordenarLista(listaDesordenada);
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
    const indexMitad1ListaPar = lista.length / 2 - 1;
    const indexMitad2ListaPar = lista.length / 2;
    const listaMitades = [];
    listaMitades.push(lista[indexMitad1ListaPar]);
    listaMitades.push(lista[indexMitad2ListaPar]);

    const medianaListaPar = calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    console.log(indexMitadListaImpar);

    const medianaListaImpar = lista[indexMitadListaImpar];
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
}

function calcularPromedio(lista) {
  function sumarTodosLosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaLista = lista.reduce(sumarTodosLosElementos);
  const promedio = sumaLista / lista.length;
  return promedio;
}

function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado - nuevoValor;
  }

  // const lista = listaDesordenada.sort((a,b) => a-b);
  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
}

function ordenarListaBidimensional(listaDesordenada, i) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[i] - nuevoValor[i];
  }

  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
}