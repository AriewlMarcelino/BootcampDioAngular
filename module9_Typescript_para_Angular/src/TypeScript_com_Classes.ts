/**
 * Classes
 */

/**
 * Modificadores de acesso
 * 
 * public => Eu consigo acessar as propriedades de qualquer lugar como dentro ou fora de uma classe.
 * private => Só podem ser acessados dentro de uma classe.
 * protected => Ele pode ser acesso dentro da classe ou de sub-classe que estão vinculados a ele.
 * ? => usamos para uma propriedade quando ela não é obriagtoria.
 * readonly => quando temos uma propriedade que é somente leitura e ele não permite que façamos a alteração fora do escopo da classe.
 */


/**
 * SuperClass
 */
class Personagens {
    private nome?  : string;
    public strength: number;
    public skill : number;

    constructor(nome : string, strength : number, skill : number){
        this.nome = nome;
        this.strength = strength;
        this.skill = skill;
    }

    // method
    ataque():string{
        return `Ataque com ${this.strength} points.`;
    }

    regeneracao():string{
        return `O ${this.nome} regenerou 1 ponto de vida`;
    }


}

/**
 * Herança 
 * 
 * Vamos conseguir acessar propriedades que vem de sua classe pai, somente  classe que estejam como PUBLIC ou PROTECED.
 */

// let p1 = new Personagens('Kyo',20,1);
// let p2 = new Magico('Mostafa',220,100,5000);
// console.log(p1);
// console.log(Magico)/;

/**
 * SubClass
 */
class Magico extends Personagens {

    // Podemos também adicionar outras propriedades que o nossa Classe pai não tinha seguindo o exemplo abaixo;
    magicPoints : number;


    constructor( nome: string,strength: number,skill: number,magicPoints : number){
        // Super seria para invocar propriedades que vem de nossa Classe Pai ou Nossa Classe Super;
        super(nome, strength, skill);
        this.magicPoints = magicPoints;
    }
}

let p1 = new Personagens('Kyo',20,1);
let p2 = new Magico('Mostafa',220,100,5000);
console.log(p1);
console.log(p2);
