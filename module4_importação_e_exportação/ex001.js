// Em uma sala contêm 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.

//Faça um programa que recebe os 5 numeros sorteados para os alunos o maior número sorteado.

/**
 * Dados de entrada:
 * 5
 * 50
 * 10
 * 98
 * 23
 * 
 * Saída:
 * 98
 */

const entradas = [5,50,10,98,23];


let maiorNumero = 0;

for(let i = 0; i < entradas.length; i ++){
    let numeroSorteado = entradas[i];

    if(numeroSorteado > maiorNumero){
        maiorNumero = numeroSorteado
        console.log(`O maior numero é: ${maiorNumero}`)
    }
}
