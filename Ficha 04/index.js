
// Importa modulo data.js
import * as data from "./data.js";


let listUsers = []
listUsers=  data.init();

console.log(listUsers)

//1 função listarNivel que recebe um parametro nivel e emite um alerta com array com os users que possuem o nivel informado
export function listarNivel(){
    let nivel = prompt("Digite o nivel que deseja listar");
    let listNivel = listUsers.filter(user => user.nivel == nivel);
    alert(`os Users no nivel ${nivel} são: \n ${listNivel.map(user => user.nome)} \n`);
}

//2 função somarPontos que receber parametro nivel e emite alerta com a soma de todos os users daquele nivel
export function somarPontos(){
    let nivel = prompt("Digite o nivel que deseja somar os pontos");
    let soma = listUsers.filter(user => user.nivel == nivel).reduce((acc, user) => acc + user.pontos, 0);
    alert(`A soma total de pontos no nivel ${nivel} é ${soma}`);
}

//3 função verificaNivel prompt que recebe nivel e verifica se existe algum user naquele nivel dizendo no alerta true ou false
export function verificaNivel(){
    let nivel = prompt("Digite o nivel que deseja verificar");
    /*let listNivel = listUsers.filter(user => user.nivel == nivel);
    alert(`Existe users no nivel ${nivel} ? ${listNivel.length > 0}`);*/
    alert (`Existe users no nivel ${nivel} ? ${listUsers.some(user => user.nivel == nivel)}`);
}

//4 função pesquisarColecionavel prompt que recebe qual o colecionavel pretede pesquisar e retorna um alerta se existe ou não users com aquele colecionavel
export function pesquisarColecionavel(){
    let colecionavel = prompt("Digite o colecionavel que deseja pesquisar");
    if (!isNaN(colecionavel)){
        colecionavel = `badge ${colecionavel}`;
    }
    let listColecionavel = listUsers.filter(user => user.colecionaveis.includes(colecionavel));
    alert(`Existe users com o colecionavel ${colecionavel} ? ${listColecionavel.length > 0}`);
}

//5 função mostrarJogadores prompt recebe o nome do objeto colecionavel e imprime todos os jogadores que possuem aquele colecionavel
export function mostrarJogadores(){
    let colecionavel = prompt("Digite o colecionavel que deseja pesquisar");
    let listColecionavel = listUsers.filter(user => user.colecionaveis.includes(colecionavel));
    alert(`Os jogadores com o colecionavel ${colecionavel} são: \n ${listColecionavel.map(user => user.nome)} \n`);
}

//6 função listaTabClass alerta com o nome dos users e os respetivos pontos, ordenada pela pontuação (decrescente)
export function listaTabClass(){
    let listOrdenada = listUsers.sort((a, b) => b.pontos - a.pontos);
    alert(`A tabela de classificação é: \n ${listOrdenada.map(user => `${user.nome} - ${user.pontos} pontos`)}`);
}

//7 função giveReward que acrescente 100 pontos a todos os users que estao num nivel, indicado pelo utilizador
export function giveReward(){
    let nivel = prompt("Digite o nivel que deseja recompensar");
    listUsers.filter(user => user.nivel == nivel).map(user => user.pontos += 100);
}

//8 função sumPontos emite um alerta com a soma total de pontos de todos os users
export function sumPontos(){
    let soma = listUsers.reduce((acc, user) => acc + user.pontos, 0);
    alert(`A soma total de pontos é ${soma}`);
}

window.listarNivel = listarNivel;
window.somarPontos = somarPontos;
window.verificaNivel = verificaNivel;
window.pesquisarColecionavel = pesquisarColecionavel;
window.mostrarJogadores = mostrarJogadores;
window.listaTabClass = listaTabClass;
window.giveReward = giveReward;
window.sumPontos = sumPontos;
