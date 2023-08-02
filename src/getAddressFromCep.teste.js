import getAddressFromCep from './getAddressFromCep.js';

// estamos trabalhando com getAdressFromCep.js

// a nossa logica, deve retornar dados quando passamos o cep valido
// deve aceitar ceps com ou sem hifens

// deve lançar o erro com esta mesnagem ''Você precisa passar um CEP'
// quando receber um cep vazio
// deve lançar um erro quando passar cep em formato invalido

import fetch from 'node-fetch'; 
global.fetch = fetch; 


// precisamos dessa informação para o teste passar

// {"cep":"30130-010","logradouro":"Praça Sete de Setembro",
//"complemento":"","bairro":"Centro","localidade":"Belo Horizonte",
//"uf":"MG","ibge":"3106200","gia":"","ddd":"31","siafi":"4123"}

test('deve retornar os dados quando passamos um cep válido', async () => {
    // aqui chamamos a função 'getAddressFromCep,que e valido
    // salvamos o retorno na variavel 'address'
    // e e assicrona, esperamos o resultado, e como e await
    // declaramos a função async
    
    // com esta variavel, vamos fazer nossos testes
  const address = await getAddressFromCep('30130010');

  // estamos chamando este cep, longradouro na
  // informacção do api, colocamos o exemplo acima
    
  expect(address.cep).toBe('30130-010');
  expect(address.logradouro).toBe('Praça Sete de Setembro');
  expect(address.bairro).toBe('Centro');
  expect(address.uf).toBe('MG');
});
  
// não esquece o await e async que e assicrona
test('deve aceitar ceps com hífen ou sem hífen', async () => {
  let address = await getAddressFromCep('30130010');
  // teste sem o hifen
  expect(address.cep).toBe('30130-010');
  // teste com hifen
  address = await getAddressFromCep('30130-010');
  expect(address.cep).toBe('30130-010');
});

// deve passar o error
test('Deve lançar erro "Você precisa passar um CEP" quando passar cep vazio', async () => {
  const emptyCep = '';

  // vai espera ser executada, para dar o error
  await expect(getAddressFromCep(emptyCep)).rejects.toThrow(
    new Error('Você precisa passar um CEP')
  );
});

// erro de cep invalido, não existe
test('Deve lançar erro quando passar cep inválido', async () => {
    // criamos as variavel invalido  s
  const invalidCep = 'XXXXX-XXX';
  const invalidCepLessDigits = '00000-00';
  const invalidCepMoreDigits = '00000-0000';
    
  // estamos esperando o erro, e ser rejeitada, e dispara o erro
  await expect(getAddressFromCep(invalidCep)).rejects.toThrow();
  await expect(getAddressFromCep(invalidCepLessDigits)).rejects.toThrow();
  await expect(getAddressFromCep(invalidCepMoreDigits)).rejects.toThrow();
});