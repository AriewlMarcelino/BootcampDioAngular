// Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero PAr encontrado.

let listaDeNumeros = [12,3,45,6,9,0,34,12,34,38,8];

for (let i  = 0; i  < listaDeNumeros.length; i ++) {
    let numero = listaDeNumeros[i];

    if(numero % 2 === 0){
        console.log(`São numeros pares: ${numero}`)
    }
}



