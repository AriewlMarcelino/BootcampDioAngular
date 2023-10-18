class CalculaMedia{
    // Metodos
    mediaNota(){

        let armazenaNota = [];

        armazenaNota.push(2);
        armazenaNota.push(5);
        armazenaNota.push(5);
        armazenaNota.push(5);

        let soma = 0;

        for (let i = 0; i < armazenaNota.length; i++) {
            const armazena = armazenaNota[i];
            soma = soma + armazena;            
        }

        const media = soma / armazenaNota.length;
        console.log(`A media de nota das sua provas é: ${media}`)

    }
}
function main(){
    let user1 = new CalculaMedia();
    let user2 = new CalculaMedia();
    user1.mediaNota()
    user2.mediaNota()
}

main();