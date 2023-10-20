

//limit de paginação;
const offset = 10;

//limite de requisição
const limit = 10;

//Url de requisição
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url)
    //quando a ação for execultada retorne o response;
    .them(function(response){
    console.log(response)
})
.catch(){
    
}