class Calculadora{

    //instancia que são alguma propriedades da calculadora;
    marca;
    cor;

    //Construtor que são algumas caracteristicas da calculadora;
    constructor(marca,cor){
        this.marca = marca;
        this.cor = cor;
    }
    //Metodos que são ações que o nosso objeto pode fazer:
    calculaSoma(num1,num2){
        num1 = parseFloat(prompt(`Digite o primeiro numero: `));
        num2 = parseFloat(prompt(`Digite o segundo numero: `));
        console.log( `A soma de ${num1} + ${num2} é igual á ${num1+num2}`);
    }
    calculaSubtracao(num1,num2){
        num1 = parseFloat(prompt(`Digite o primeiro numero: `));
        num2 = parseFloat(prompt(`Digite o segundo numero: `));
        return `A soma de ${num1} - ${num2} é igual á ${num1-num2}`;
    }
    calculaDivisao(num1,num2){
        num1 = parseFloat(prompt(`Digite o primeiro numero: `));
        num2 = parseFloat(prompt(`Digite o segundo numero: `));
        return `A soma de ${num1} / ${num2} é igual á ${num1/num2}`;
    }
    calculaMultiplicacao(num1,num2){
        num1 = parseFloat(prompt(`Digite o primeiro numero: `));
        num2 = parseFloat(prompt(`Digite o segundo numero: `));
        return `A soma de ${num1} * ${num2} é igual á ${num1*num2}`;
    }
    descrevaCalculadora(){
        return `A marca da calculadora é: ${this.marca}, e sua cor é ${this.cor}`;
    }
    perguntarAoUsuarioQueContaQuerFazer(pergunta){
        pergunta = parseFloat(prompt('Qual operação deseja realizar: 1(soma) | 2(subtracao) | 3(multiplicacao) | 4(divisao): '));

        if(pergunta === 1){
            return this.calculaSoma();
        }else if( pergunta === 2){
            return this.calculaSubtracao();
        }else if(pergunta === 3){
            return this.calculaMultiplicacao();
        }else if(pergunta === 4){
            return this.calculaDivisao();
        }else{
            console.log(`Nenhuma das opções selecionadas, por favor selecione alguma !`)
        }
    }

}


let cal1 = new Calculadora('Knupp','Cinza');
console.log(cal1.perguntarAoUsuarioQueContaQuerFazer());

