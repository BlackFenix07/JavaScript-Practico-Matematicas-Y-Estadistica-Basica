const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const btn = document.querySelector("#calculate");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerText = "Por favor, llena el formulario.";
    return;
  }

  let discount;

  // if (coupon === "Alto") {
  //   discount = 30;
  // } else if (coupon === "Medio") {
  //   discount = 20;
  // } else if (coupon === "Bajo") {
  //   discount = 10;
  // } else {
  //   pResult.innerText = "El cupón no es válido.";
  //   return;
  // }

  switch (coupon) {
    case "Alto":
      discount = 30;
      break;
    case "Medio":
      discount = 20;
      break;
    case "Bajo":
      discount = 10;
      break;
    default:
      pResult.innerText = "El cupón no es válido.";
      return;
  }

  const newPrice = (price * (100 - discount)) / 100;
  pResult.innerText = "El nuevo precio con descuento es: $" + newPrice;
}