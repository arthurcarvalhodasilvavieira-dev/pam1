const cache = new Map();

const BASE_URL = 'https://swapi.dev/api/';

export async function consultarStarWars(tipo, pesquisa) {
  const categoria = tipo.trim().toLowerCase();
  const termo = pesquisa.trim();

  const categoriasPermitidas = [
    'people',
    'planets',
    'films',
    'species',
    'vehicles',
    'starships',
  ];

  if (!categoriasPermitidas.includes(categoria)) {
    throw new Error('Categoria inválida.');
  }

  if (!termo) {
    throw new Error('Digite algo para pesquisar.');
  }

  const chave = `${categoria}-${termo.toLowerCase()}`;

  if (cache.has(chave)) {
    return cache.get(chave);
  }

  const url = `${BASE_URL}${categoria}/?search=${encodeURIComponent(termo)}`;

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error('Não foi possível acessar a API.');
    }

    const dados = await resposta.json();

    if (!Array.isArray(dados.results)) {
      throw new Error('Resposta inválida da API.');
    }

    cache.set(chave, dados.results);

    return dados.results;

  } catch (erro) {
    throw new Error(
      erro.message || 'Erro ao consultar a API Star Wars.'
    );
  }
}
