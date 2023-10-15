/*

1. Crie uma class para representar um carro.

2. Os carros possuem marca,
   Uma cor 
   Um gasto médio de combustivél por Km rodado que dado a quantidade de quiloemtros e o preço de combustivél nos dê o valor gasto em reais para realizar este percurso.

*/

class Carro {

    // INSTANCIA DE UM OBJETO -> Que são sua porpriedades
    cor;
    marca;
    precoCombustivel;
    distanciaPercorridaPorKm;
    consumoMedioDoVeiculoEmKm;

    // CONSTRUCTOR -> Mostra qual sera a ação de cada propriedade deste objeto;
    constructor(marca,cor,precoCombustivel,distanciaPercorridaPorKm ,consumoMedioDoVeiculoEmKm){
        this.marca = marca;
        this.cor = cor;
        this.precoCombustivel = precoCombustivel;
        this.distanciaPercorridaPorKm = distanciaPercorridaPorKm  / consumoMedioDoVeiculoEmKm;
        this.consumoMedioDoVeiculoEmKm = (distanciaPercorridaPorKm  / consumoMedioDoVeiculoEmKm) * precoCombustivel;
    }

    //METODO -> que indica a ação de uma propriedade no objeto.
    descrevaCarro(){
        console.log(`Este veiculo é da marca ${this.marca},a sua cor é ${this.cor}, e este veiculo tem um consumo médio de  R$${this.consumoMedioDoVeiculoEmKm.toFixed(2)} reais, gasto medio de litros é de  ${this.distanciaPercorridaPorKm .toFixed(2)} por Km.`);
    }

    

}

let v1 = new Carro('Ford Fusion Hybrid 2.0','Vermelho',5.78,100,15.1);
let v2 = new Carro('Chevrolet Spin 1.8','Cinza',5.78,100,9.4);
let v3 = new Carro('Chevrolet Spin 1.8','Cinza',5,70,12);

v1.descrevaCarro()
v2.descrevaCarro()
v3.descrevaCarro()





