// Faça um program para calcular o valor de uma viagem

let precoGasolina = 5.79;
let precoEtanol = 4.79;
let distanciaPercorrida = 500;
let ConsumoMedioDoVeiculo = 10;
let totalDelitrosUsados = (distanciaPercorrida / ConsumoMedioDoVeiculo);
let valorDeGastoComGasolina = totalDelitrosUsados * precoGasolina;
let valorDeGastoComEtanol = totalDelitrosUsados * precoEtanol;

let viagem = prompt(`Qual sera o topo de combustive ultilizado para fazer a viagem: `);
console.log(viagem);

if(viagem === 'g'){
	console.log(`O valor que sera investido para percorrer a distância de ${distanciaPercorrida} Km, com Gasolina é de R$${valorDeGastoComGasolina} `);
}else if (viagem === 'e'){
	console.log(`O valor que sera investido para percorrer a distância de ${distanciaPercorrida} Km, com Gasolina é de R$${valorDeGastoComEtanol} `);
}else{
	console.log('Nenhuma das opções a seguir foi selecionada por favor escolha uma !')
}






