/* Construa uma função de utilitários para manipulação de String, por exemplo, ao receber as String "lorem ipsum dolor" e "uppercase" a função deve retornar "LOREM IPSUM DOLOR".*/

function formataString (string, funcao) {
    switch (funcao) {
        case 'uppercase':
            return string.toUpperCase();
        case 'lowercase':
            return string.toLowerCase();
        case 'camelcase':
            
        default:
            console.log('Informe uma função válida')
    }
}

console.log(formataString('bom dia', 'uppercase'))
console.log(formataString('Bom Dia', 'lowercase'))
console.log(formataString('Lorem Ipsum Dolor', 'camelcase'))