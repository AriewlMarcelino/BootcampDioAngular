function somaNotas(){

    let notas = [];

    notas.push(5);
    notas.push(3);
    notas.push(2);
    notas.push(10);
    
    console.log(notas);
    
    
    //Array de onde vai começar a soma;
    let soma = 0;
    
    for (let i = 0; i < notas.length; i++) {
        //const criada para percorrer todos os itens dentro da array;
        const nota = notas[i];
        soma = soma + nota;
    }
    
    const media  = soma / notas.length;
    console.log(media)

}




