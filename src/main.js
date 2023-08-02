import Swal from "sweetalert2";

import "./style.css";


// pegamos o evento de botão, e colocamos o addEventListener
// no evento de click
import getAddressFromCep from "./getAddressFromCep";
document.querySelector("button").addEventListener("click", handleClick);


// e quando o botão e clicado, ele pegar o valor que esta no input

export async function handleClick() {
  const cep = document.querySelector("input").value;


    // quando o valor do input for clicado em cep
    // vai chamar a função getAddressFromCep
    // e passar o cep que ta no imput
  try {
    const addressData = await getAddressFromCep(cep);
    document.querySelector("pre").innerHTML = JSON.stringify(addressData);
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }
}
