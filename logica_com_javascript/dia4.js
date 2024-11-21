const maximo = 10
const minimo = 0

let numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo)

for(let i = 0; i < 3; i++) {
    var tentativa = prompt("Tente acertar o numero de 1 a 10:")
    if( tentativa == numero ) {
        alert("Parabéns, você acertou!")
        break
    }
    else if( i == 2 ) {
        alert(`Que pena, você não acertou em nenhuma das tentativas, o numero era ${numero}`)
    }
    else {
        alert("Errado, tente novamente.")
    }
}
