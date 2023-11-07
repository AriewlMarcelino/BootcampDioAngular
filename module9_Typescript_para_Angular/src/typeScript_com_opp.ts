/**
 * Objetos
 */

// Objeto sen previsibilidade;
let identidade : object = {
    nome:'Paulo',
    cidade:'SP',
    idade:24
};

// Objeto com previsibilidade;
type ProdutosLoja = {
    nome: string;
    preco: number;
    unidades: number
}


let MeuProdutoLoja : ProdutosLoja = {
    nome: 'Tênis',
    preco: 89.90,
    unidades: 5
};

