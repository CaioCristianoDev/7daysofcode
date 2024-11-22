// Inicializando listas de categorias
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];

alert("Bem-vindo ao organizador de lista de compras!");

while (true) {
  // Perguntar se o usuário deseja adicionar ou remover um item
  let acao = prompt(
    "O que você deseja fazer? Digite:\n1 - Adicionar uma comida à lista\n2 - Remover uma comida da lista\n3 - Finalizar"
  );

  if (acao === "1") {
    // Adicionar um item
    let comida = prompt("Qual comida você deseja adicionar?");
    let categoria = prompt(
      "Em qual categoria essa comida se encaixa? (Escolha: frutas, laticínios, congelados, doces, outros)"
    ).toLowerCase();

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
  } else if (acao === "2") {
    // Remover um item (se houver pelo menos um item na lista)
    if (
      frutas.length === 0 &&
      laticinios.length === 0 &&
      congelados.length === 0 &&
      doces.length === 0 &&
      outros.length === 0
    ) {
      alert("A lista está vazia! Não há itens para remover.");
    } else {
      let categoria = prompt(
        "De qual categoria você deseja remover um item? (Escolha: frutas, laticínios, congelados, doces, outros)"
      ).toLowerCase();

      let listaCategoria;
      if (categoria === "frutas") {
        listaCategoria = frutas;
      } else if (categoria === "laticínios" || categoria === "laticinios") {
        listaCategoria = laticinios;
      } else if (categoria === "congelados") {
        listaCategoria = congelados;
      } else if (categoria === "doces") {
        listaCategoria = doces;
      } else if (categoria === "outros") {
        listaCategoria = outros;
      } else {
        alert("Categoria inválida!");
        continue;
      }

      if (listaCategoria.length === 0) {
        alert(`A categoria ${categoria} está vazia!`);
      } else {
        let itemRemover = prompt(
          `Itens na categoria ${categoria}: ${listaCategoria.join(", ")}\\nQual item você deseja remover?`
        );
        let index = listaCategoria.indexOf(itemRemover);

        if (index !== -1) {
          listaCategoria.splice(index, 1);
          alert(`O item "${itemRemover}" foi removido da categoria ${categoria}.`);
        } else {
          alert(`Não foi possível encontrar o item "${itemRemover}" na categoria ${categoria}!`);
        }
      }
    }
  } else if (acao === "3") {
    // Finalizar o programa
    alert(
    `Lista de compras:\n` +
    `Frutas: ${frutas.join(", ") || "Nenhum item"}\n` +
    `Laticínios: ${laticinios.join(", ") || "Nenhum item"}\n` +
    `Congelados: ${congelados.join(", ") || "Nenhum item"}\n` +
    `Doces: ${doces.join(", ") || "Nenhum item"}\n` +
    `Outros: ${outros.join(", ") || "Nenhum item"}`
    );
    break;
  } else {
    alert("Opção inválida! Por favor, escolha uma opção válida.");
  }
}