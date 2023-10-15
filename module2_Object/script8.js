// Example of object
const pessoa = {
    nome : 'Paulo',
    idade : 23,

    // function
    descrever: function(){
        console.log(`O meu nome é ${this.nome}, e minha idade é ${this.idade}`);
    }

}
// Acesse propery of a object
console.log(pessoa.idade);
console.log(pessoa.nome);
console.log(pessoa);
pessoa.descrever();

// how to example Class and instnces in objectos;
class Pessoa {

    //Instance will be facts of people or object as example car;
    nome;
    idade;


    //Constructions show that people make when instanced;
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    //method wiil be that make;
    descrever(){
        console.log(`O meu nome é ${this.nome}, e minha idade é ${this.idade}`);
    }

}

// functions receive objects

function compararPessoas(){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if((p2.idade > p1.idade)){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    };
}

const paulo = new Pessoa('Paulo',25);
const rogerio = new Pessoa('Rogerio',26)

console.log(paulo,rogerio);




