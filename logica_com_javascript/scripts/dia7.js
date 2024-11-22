// Funções para cada operação
function somar(a, b) {
  return a + b;
}
    
function subtrair(a, b) {
  return a - b;
}
    
function multiplicar(a, b) {
  return a * b;
}
    
function dividir(a, b) {
  if (b === 0) {
    return "Erro: divisão por zero não é permitida.";
  }
  
  return a / b;
}
    
// Função principal
function calculadora() {
  alert("Bem-vindo à calculadora!");
    
  while (true) {
    // Exibir opções de operação
    let operacao = prompt(
      "Escolha uma operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair"
    );
    
    if (operacao === "5") {
      alert("Até a próxima!");
      break;
    }
    
    if (["1", "2", "3", "4"].includes(operacao)) {
      // Solicitar números ao usuário
      let num1 = parseFloat(prompt("Digite o primeiro número:"));
      let num2 = parseFloat(prompt("Digite o segundo número:"));
    
      // Verificar a operação escolhida e executar a função correspondente
      let resultado;
      if (operacao === "1") {
        resultado = somar(num1, num2);
      } else if (operacao === "2") {
        resultado = subtrair(num1, num2);
      } else if (operacao === "3") {
        resultado = multiplicar(num1, num2);
      } else if (operacao === "4") {
        resultado = dividir(num1, num2);
      }
    
      alert(`O resultado da operação é: ${resultado}`);
    } else {
      alert("Opção inválida. Por favor, escolha uma operação válida.");
    }
  }
}
    
// Iniciar a calculadora
calculadora();