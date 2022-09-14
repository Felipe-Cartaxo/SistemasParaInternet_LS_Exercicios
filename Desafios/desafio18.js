function somaVetor(vetor) { // Função que retorna a soma de todos os elementos do vetor
    let totalVetor = 0
    for (let x = 0; x < vetor.length; x++) {
        totalVetor += vetor[x]
    }

    return totalVetor
}

function somaVetorImpares(vetor) { // Função que retorna a soma dos elementos ímpares do vetor
    let totalVetor = 0
    for (let x = 0; x < vetor.length; x++) {
        if (vetor[x] % 2 == 1) {
            totalVetor += vetor[x]
        }
    }

    return totalVetor
}

function produtoVetor(vetor) { // Função que retorna o produto entre os elementos do vetor
    let totalVetor = 1
    for (let x = 0; x < vetor.length; x++) {
        totalVetor *= vetor[x]
    }

    return totalVetor
}

console.log(somaVetor([1, 2, 3])) // => 6
console.log(somaVetor([2, 2, 2])) // => 6
console.log(somaVetor([1, 2, 3, 4, 5, 6])) // => 21
console.log(somaVetorImpares([1, 2, 3])) // => 4
console.log(somaVetorImpares([2, 2, 2])) // => 0
console.log(somaVetorImpares([1, 2, 3, 4, 5, 6])) // => 9
console.log(produtoVetor([1, 2, 3])) // => 6
console.log(produtoVetor([2, 2, 2])) // => 8
console.log(produtoVetor([1, 2, 3, 4, 5, 6])) // => 720