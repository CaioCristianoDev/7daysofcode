// Inicializando listas de categorias
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];

alert("Bem-vindo ao organizador de lista de compras!");

while (true) {
  // Perguntar se o usuário deseja adicionar um item
  let adicionar = prompt("Deseja adicionar uma comida na sua lista de compras? (Responda 'sim' ou 'não')").toLowerCase();

  if (adicionar === "não" || adicionar === "nao") {
    break; // Sai do loop se o usuário não quiser adicionar mais itens
  } else if (adicionar === "sim") {
    // Perguntar qual item adicionar
    let comida = prompt("Qual comida você deseja adicionar?");
    // Perguntar em qual categoria a comida se encaixa
    let categoria = prompt(
      "Em qual categoria essa comida se encaixa? (Escolha: frutas, laticínios, congelados, doces, outros)"
    ).toLowerCase();

    // Adicionar o item à categoria correta
    if (categoria === "frutas") {
      frutas.push(comida);
    } else if (categoria === "laticínios" || categoria === "laticinios") {
      laticinios.push(comida);
    } else if (categoria === "congelados") {
      congelados.push(comida);
    } else if (categoria === "doces") {
      doces.push(comida);
    } else if (categoria === "outros") {
      outros.push(comida);
    } else {
      alert("Categoria inválida! O item não foi adicionado.");
    }
  } else {
    alert("Resposta inválida. Por favor, responda com 'sim' ou 'não'.");
  }
}

// Exibir a lista de compras agrupada por categorias
alert(
`Lista de compras:\n\n` +
`Frutas: ${frutas.join(", ") || "Nenhum item"}\n` +
`Laticínios: ${laticinios.join(", ") || "Nenhum item"}\n` +
`Congelados: ${congelados.join(", ") || "Nenhum item"}\n` +
`Doces: ${doces.join(", ") || "Nenhum item"}\n` +
`Outros: ${outros.join(", ") || "Nenhum item"}`
);