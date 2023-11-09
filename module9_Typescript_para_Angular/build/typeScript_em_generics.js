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
function concatArray() {
    var _a;
    var itens = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        itens[_i] = arguments[_i];
    }
    return (_a = new Array()).concat.apply(_a, itens);
}
var numArray = concatArray([1, 5], [3]);
var stgArray = concatArray(["Felipe", "Paulo"], ["Marcelo"]);
console.log(numArray);
console.log(stgArray);
