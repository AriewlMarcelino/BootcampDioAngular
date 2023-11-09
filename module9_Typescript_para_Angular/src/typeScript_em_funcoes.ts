/**
 * funções
 */

function addNumber(x:number, y:number):number{
    return x + y;
}

function helloWorld(name :string):string{
    return `hello ${name}`;
}

console.log(helloWorld('Paulo'));

let soma: number = addNumber(4,7);
console.log(soma);

/**
 * Funções de Multi Tipos
 * => Em funções que são de multiplos tipos podemos ultilizar a seguinte condição || como abaixo no exemplo:
 */
function callToPhone (phone : number | string) : number | string {
    return phone;
} 
console.log(callToPhone(3434-3434))


/**
 * funções async
 */
async function consultarBancoDeDados(id : number): Promise<string> {
    return "Felipe";
}

