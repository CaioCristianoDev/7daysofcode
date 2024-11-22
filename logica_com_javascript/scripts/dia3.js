let area
let aprender

while (true) {
    area = prompt("Você quer seguir para a área de Front-End ou seguir para a área de Back-End?")

    if (area == "Front-End") {
        aprender = prompt("Você quer aprender React ou Vue?")
        if(aprender !== "React" && aprender !== "Vue" ) {
            alert("Resposta invalida, escreva a resposta exatamente do mesmo jeito que está escrito na pergunta.")
            continue
        }
    } 
    else if (area == "Back-End") {
        aprender = prompt("Você quer aprender c# ou java?")
        if(aprender !== "c#" && aprender !== "java" ) {
            alert("Resposta invalida, escreva a resposta exatamente do mesmo jeito que está escrito na pergunta.")
            continue
        }
    }
    else {
        alert("Erro: Digite exatamente como está escrito na mensagem.")
        continue
    }
    break
}

while(true) {
    let especializaroufullstack = prompt("O que você quer?\n1. Se especializar na área\n2. Se tornar fullstack")

    if (especializaroufullstack == "1") {
        alert(`Se especialize em ${aprender} para se destacar no ${area}`)
    } 
    else if (especializaroufullstack == "2") {
        alert(`Para virar fullstack, será necessário estudar além de ${aprender}`)
    }
    else {
        alert("Erro: Digite 1 ou 2 para responder.")
        continue
    }
    break
}

while (true) {
    let tecnologia = prompt("Tem outra tecnologia que você queira aprender? Escreva o nome ou clique em 'cancelar' para interromper as perguntas.")

    if (tecnologia == null) {
        break
    }

    alert(`${tecnologia} também é muito legal!`)
} 