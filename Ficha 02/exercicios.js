//Strings e funções declarativas

// Implemente uma função showInverse(texto) que recebe um texto e retorna o mesmo texto invertido.

function showInverse() {
    let texto = prompt("Digite um texto: ");
    let txtArray = texto.split(" ");

    let textoInvertido = txtArray.reverse().join(" ");

    console.log(textoInvertido);
    
    alert(textoInvertido);
}

// função numCities que recebe um array de cidades introduzido e retorna o número total de cidades e o nome de cidades.

function numCities() {
    let cidades = [];

    do {
        let cidade = prompt("Digite o nome de uma cidade: ");
        cidades.push(cidade);
    } while (confirm("Deseja adicionar mais uma cidade?"));

    let numCidades = cidades.length;

    console.log(numCidades);
    console.log(cidades);
    alert(numCidades + " cidades: " + cidades);
}

// função showTabuada que recebe um número e retorna uma tabela da tabuada desse número.

function showTabuada() {
    let num = parseInt(prompt("Digite um número: "));

    if (isNaN(num)) {
        alert("Digite um número válido!");
        return;
    }
    
    let tabuada = "";
    for (let i = 1; i <= 10; i++) {
        tabuada += num + " x " + i + " = " + num * i + "\n";
    }
    alert(`Esta é a tabuada dos ${num} : \n ${tabuada}`);
}

// função calcSoma que adiciona N numeros introduzidos como parametros.

function calcSoma() {
    let numeros = [];

    do {
        let num = parseInt(prompt("Digite um número: "));
        numeros.push(num);
    } while (confirm("Deseja adicionar mais um número?"));
    
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    console.log(soma);
    alert("A soma dos números é: " + soma);
    
}