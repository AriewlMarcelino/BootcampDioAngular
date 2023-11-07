// Array

// Array de tipo string modelo 1
let dados : string[] = ['Paulo','Felipe','Amarantes'];

// Array de tipo string modelo 2
let dados2 : Array<string> = ['Paulo','Felipe','Amarantes'];


/** Array de multi-tipos => como dica é interresante tipar com typeScript e não driblar ele, use se for conveniente, se não tipe com o valor adequado*/
let infos : (string | number)[] = ['Paulo',26,'Felipe',18,'Amarantes',18,]


/** Tuplas segue uma cadeia de hierarquia e ordem, como exemplo abaixo, se quebrado a ordem o nosso typeScript avisa sobre o erro.*/
let boleto : [string, number, number] = ['Conta de agua',58.60,7895613245157]

