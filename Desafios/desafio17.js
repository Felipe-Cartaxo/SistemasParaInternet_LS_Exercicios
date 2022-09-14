function menorElementoVetor(vetor) { // Função para determinar o menor número do vetor
    let menorValor = vetor[0]

    for (let x = 1; x < vetor.length; x++) {
        if (vetor[x] < menorValor) {
            menorValor = vetor[x]
        }
    }

    return menorValor
}

function maiorElementoVetor(vetor) { // Função para determinar o maior número do vetor
    let maiorValor = vetor[0]

    for (let x = 1; x < vetor.length; x++) {
        if (vetor[x] > maiorValor) {
            maiorValor = vetor[x]
        }
    }
        
    return maiorValor
}

console.log(menorElementoVetor([1, 4, 2, 6, 10, 3]))
console.log(menorElementoVetor([1, 4, -1, 6, 10, 3]))
console.log(maiorElementoVetor([1, 4, 2, 6, 10, 3]))