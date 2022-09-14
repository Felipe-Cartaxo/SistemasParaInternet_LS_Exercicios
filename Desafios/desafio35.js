// Crie um programa para gerar a citação de nomes de modo normal e compacto. Considere que os nomes simples e não possuem preposições.

//Exemplo: Luiz Carlos Rodrigues Chaves, normal	=> CHAVES; Luiz Carlos Rodrigues

function string_citation (name) {
    name_split = name.split(' ') // Quebra o nome, transforma-o num vetor
    new_name = name_split.pop().toUpperCase() + '; ' // Pega o último indice do vetor e atribue para a variável 'new_name'
    for (let x = 0; x < name_split.length; x++) {
        new_name += name_split[x] + ' '
    }

    return new_name
}

console.log(string_citation('Luiz Carlos Rodrigues Chaves'))
console.log(string_citation('Felipe Cartaxo Freitas'))