/*Crie uma função que gere uma lista em HTML com as tags <ul> e <li>, e que a quantidade de itens seja definida por parâmetro. Então ao chamar createList(3) o resultado deve ser:

<ul>
	<li>Text 1</li>
	<li>Text 2</li>
	<li>Text 3</li>
</ul>
Contudo o texto do item pode ser alterado usando o segundo parâmetro. Caso a chamada seja createList(5, "Item"), então o retorno será:

<ul>
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
	<li>Item 4</li>
	<li>Item 5</li>
</ul> */

function criaLista(totalLinhas, conteudo) {
	count = 1;
	if (conteudo == null) { // Caso a string não seja definida
		conteudoString = 'Text ';
	}
	else {
		conteudoString = conteudo; // Caso uma string seja passada como parâmtro
	}
    
	console.log('<ul>');
	while (count <= totalLinhas) {
		conteudo = conteudoString + count;
		console.log('   <li>' + conteudo + '</li>');
		count ++;
	}
console.log('</ul>');
}

console.log(criaLista(3))
console.log(criaLista(5, 'Item '))