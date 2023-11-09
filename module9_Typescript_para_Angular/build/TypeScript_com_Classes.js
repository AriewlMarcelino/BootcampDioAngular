/**
 * Classes
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Modificadores de acesso
 *
 * public => Eu consigo acessar as propriedades de qualquer lugar como dentro ou fora de uma classe.
 * private => Só podem ser acessados dentro de uma classe.
 * protected => Ele pode ser acesso dentro da classe ou de sub-classe que estão vinculados a ele.
 * ? => usamos para uma propriedade quando ela não é obriagtoria.
 * readonly => quando temos uma propriedade que é somente leitura e ele não permite que façamos a alteração fora do escopo da classe.
 */
/**
 * SuperClass
 */
var Personagens = /** @class */ (function () {
    function Personagens(nome, strength, skill) {
        this.nome = nome;
        this.strength = strength;
        this.skill = skill;
    }
    // method
    Personagens.prototype.ataque = function () {
        return "Ataque com ".concat(this.strength, " points.");
    };
    Personagens.prototype.regeneracao = function () {
        return "O ".concat(this.nome, " regenerou 1 ponto de vida");
    };
    return Personagens;
}());
/**
 * Herança
 *
 * Vamos conseguir acessar propriedades que vem de sua classe pai, somente  classe que estejam como PUBLIC ou PROTECED.
 */
// let p1 = new Personagens('Kyo',20,1);
// let p2 = new Magico('Mostafa',220,100,5000);
// console.log(p1);
// console.log(Magico)/;
/**
 * SubClass
 */
var Magico = /** @class */ (function (_super) {
    __extends(Magico, _super);
    function Magico(nome, strength, skill, magicPoints) {
        var _this = 
        // Super seria para invocar propriedades que vem de nossa Classe Pai ou Nossa Classe Super;
        _super.call(this, nome, strength, skill) || this;
        _this.magicPoints = magicPoints;
        return _this;
    }
    return Magico;
}(Personagens));
var p1 = new Personagens('Kyo', 20, 1);
var p2 = new Magico('Mostafa', 220, 100, 5000);
console.log(p1);
console.log(p2);
