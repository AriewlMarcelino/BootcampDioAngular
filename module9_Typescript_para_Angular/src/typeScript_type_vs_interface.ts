/**
 * Interfaces (Types vs Interfaces)
 * 
 * Types => Normalmente utilizados para tipar objetos;
 * Interfaces =>  Normalmente utilizado para quando vamos trabalhar com  classes;
 *
 */

type robot = {
    id: number,
    name: string
};

interface robot2{
    id:number,
    name: string
}

const bot: robot = {
    id: 1,
    name: 'Maga-Men'
}

const bot2: robot2 = {
    id: 2,
    name: 'Maga-Men'
}

// console.log((bot1.id = 1));
console.log(bot2);