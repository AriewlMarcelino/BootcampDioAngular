// Make a program that calculate IMC;
// Fomulation weight / (heigth * heigth);

let peso = parseFloat(prompt(`Qual o seu peso: `));
let altura = parseFloat(prompt(`Qual sua altura: `)); 
const imc = peso / (Math.pow(altura, 2));

console.log(parseFloat(imc.toFixed(2)));

if(imc < 18.5){
	console.log(`Seu imc é de ${imc} com base na tabela IMC o seu peso esta abaixo !`)
}else if(imc >= 18.5 && imc <= 25){
	console.log(`Seu imc é de ${imc} com base na table IMC o seu peso esta normal !`)
}else if(imc >= 25 && imc <= 30){
	console.log(`Seu imc é de ${imc}  com base na tabela IMC o seu peso esta acima do esperado !`)
}else if(imc >= 40 && imc <= 60){
	console.log(`Seu imc é de ${imc.toFixed(2)} com base na tabela IMC o seu peso esta muito acima do esperado !`)
}else{
	console.log(`Insira um peso e um altura porfavor !`)
}

