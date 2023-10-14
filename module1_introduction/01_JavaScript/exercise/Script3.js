let nota1 = parseFloat(prompt('Digite a sua primeira nota: '));
let nota2 = parseFloat(prompt('Digite a sua segunda nota: '));
let nota3 = parseFloat(prompt('Digite a sua terceira nota: '));
let media = (nota1 + nota2 + nota3) / 3;
// console.log(media.toFixed(2));
if(media < 5){
	console.log(`Infelizmente a sua media foi ${media}, que esta abaixo de 5 reprovado !`)
}else if(media > 5 && media < 7){
	console.log(`Parabens a sua media foi ${media}, voce esta de recuperacao vamos melhora-lá !`)
}else if(media > 7){
	console.log(`Parabens voce esta aprovado sua media foi ${media}`)
}


