/**
 * Generics
 * 
 * 
 * Quando temos problemas com tipagem, em TS, e não quereos fugir do  contexto, ou burlar as regras como o professor explicou, temos um tipo de propriedade do TS que nos ajuda com esta dificuldade ele se chamar:
 * 
 * <T> => generic que nos permetir ele aceitar o que queremos ,e não o que o sistema pede, sendo assim ajudando em sistuações que as vezes temo muitos tipos em uma mesmo elemento.
 * 
 * Exemplo passado abaixo é de uma array que contatena com outras array que são de varios tipos.
 * 
 * 
 */

function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5],[3]);
const stgArray = concatArray<string[]>(["Felipe","Paulo"],["Marcelo"]);



console.log(numArray);
console.log(stgArray);