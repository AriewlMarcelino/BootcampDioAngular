//gerador de persornagens 


class Personagem {


    nome;
    idade;
    classe;
    hp;
    habilidades;


    constructor(nome, idade, classe, hp, habilidades) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
        this.hp = hp;
        this.habilidades = habilidades;
    }


    verHabilidades(skill) {
        return skill = {
            Passiva : this.habilidades.Passiva,
            habilidade1 : this.habilidades.habilidade1,
            habilidade2 : this.habilidades.habilidade2,

        }
    }


    ativarPassiva(){
        return (`O personargem ${this.nome} ativou sua passiva ${this.verHabilidades().Passiva}`)
    }

    lancarhabilidade1(){
        return(`O personargem ${this.nome} lançou a habilidade ${this.verHabilidades().habilidade1}`)
    }

    lancarhabilidade2(){
        return(`O personargem ${this.nome} lançou a habilidade ${this.verHabilidades().habilidade2}`)
    }




}

let azariel = new Personagem('Azariel',49,'Mago',320, habilidades = {Passiva : 'regeneração de 1% de vida a cada 5s.',habilidade1 : 'bola de fogo',habilidade2 :'Aguia de fogo'});
console.log(azariel.ativarPassiva())
console.log(azariel.lancarhabilidade1())
console.log(azariel.lancarhabilidade2())

let miguel = new Personagem('Miguel' ,29 , 'Assasino', 420, habilidades = {Passiva :'Causa veneno 2% a cada golpe no inimigo',habilidade1 :'Sombra redundante',habilidade2 :'Onda de impacto'});
console.log(miguel.visaoGeralPersonagem())
console.log(miguel.ativarPassiva())
console.log(miguel.lancarhabilidade1())
console.log(miguel.lancarhabilidade2())


