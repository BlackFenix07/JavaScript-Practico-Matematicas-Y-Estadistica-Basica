let a = "base";
let b = "lado1";
let c = "lado2";

function trianguloEscaleno(a, b, c) {
  if (a === b || a === c || b === c) {
    return false;
  } // Si el triángulo no es escaleno, retorna falso.

  // De lo contrario, si es escaleno, se calcula su área y luego su altura:
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  let altura = Math.floor((2 * area) / a);
  return altura;
}