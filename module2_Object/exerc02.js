/*
2. Crie uma classe para representar uma pessoa.

   Para cada pessoa teremos os atributos:
   - nome
   - peso
   - altura

   As pessoas devem ter a capaciade de dizer o seu IMC (peso / (altura * altura));

   Instancie uma pessoa chamada José que tenha 70Kg e peso de 1.75 de altura e peça para ela dizer o valor de seu IMC.
*/


class People {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    describePeopleYourImc() {
        return `Meu é ${this.nome} e o IMC é: ${this.peso / (this.altura * this.altura).toFixed(1)}`;
    }


    statusIMC() {

        const imc = this.describePeopleYourImc();


        if(imc < 18.5){
            return `com base na tabela IMC o seu peso esta abaixo !`
        }else if(imc >= 18.5 && imc <= 25){
            return `com base na table IMC o seu peso esta normal !`
        }else if(imc >= 25 && imc <= 30){
            return `com base na tabela IMC o seu peso esta acima do esperado !`
        }else if(imc >= 40 && imc <= 60){
            return `com base na tabela IMC o seu peso esta muito acima do esperado ! `
        }else{
            return `Insira um peso e um altura porfavor ! `
        }
    }

}


let p1 = new People('Paulo', 75, 1.78);
let p2 = new People('José', 70, 1.75);


console.log(p1.describePeopleYourImc());
console.log(p1.statusIMC());

