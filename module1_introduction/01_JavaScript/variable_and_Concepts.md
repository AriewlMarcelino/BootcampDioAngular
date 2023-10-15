## Variable e operations


Understanding a little more about variable, we have a variable with number 10.

Resume an variable can be modify or replaced, when we redistributed. let see an example:

<code>
let variable = 10;
console.log(variable);
variable = 11; //Where happaned change.
console.log(variable);
</code>

- What happened when we need change a const in javaScript, they show an error of syntax call ("typeError");

- Dou you see in an for example bellow:

<code>
const pi = 3.14;
console.log(pi);

pi = 3.15; //Where happen the error of syntax;
</code>





## Operations

- We have some operations in javascript, that can help us, realize the counts, follow the operators:

- sum (+)
- subtraction (-)
- division (/)
- multiplication (*)

- How make to used this operations in javaScript simple, let see bellow:


<code>
let sum = 2 + 4;
console; log(sum)
let sub = 2 - 4;
console; log(sub)
let div = 2 / 4;
console; log(div)
let mul = 2 * 6;
console; log(mul)
</code>


## Exercise 01

Make a program for calculate the value of travel.

Do you will have 3 variable:
 1 - Price gas
 2 - Averange spend gas of car (Km)
 3 - Distance in (Km) for travel.

 Print in the console the value averange of gas for realize this travél. 



## Resolution

<code>

let preco_gasolina = 5.79;
let distancia_percorrida = 100;
let Consumo_médio_do_veículo = 10;

let totalDelitrosUsados = (distancia_percorrida / Consumo_médio_do_veículo);
let valorDeGastoComGasolina = totalDelitrosUsados * valorDeGastoComGasolina;

console.log(`O valor a ser investido em gasoline para esta viajem é de ${valorDeGastoComGasolina} voce poderá rodar ${totalDelitrosUsados} Lt`);
</code>