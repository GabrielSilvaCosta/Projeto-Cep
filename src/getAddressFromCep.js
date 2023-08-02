
// vai retorna um erro, caso não recebe cep como parametro
export default async function getAddressFromCep(cep) {
    if (!cep) throw new Error('Você precisa passar um CEP');
  
    // se receber um fetch(), ela vem e faz o api do cep
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    // e retorna a informação no retorno data
    const data = await result.json();
    return data;
  }

  // então esta e uma função que bate em uma api
  // e retorna a informação para gente