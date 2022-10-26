var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _data, _quantidade, _valor;
export class Negociacao {
    constructor(data, quantidade, valor) {
        //Atributos privados #
        _data.set(this, void 0);
        _quantidade.set(this, void 0);
        _valor.set(this, void 0);
        __classPrivateFieldSet(this, _data, data);
        __classPrivateFieldSet(this, _quantidade, quantidade);
        __classPrivateFieldSet(this, _valor, valor);
    }
    /**Aqui vemos que, com a linguagem mais moderna do Js,
     * conseguimos criar atributos provados de uma classe,
     * nos quais podemos atribuir valores atavés do construtor
     * ou através de métodos acessadores.
     **/
    /**Assim como o método acima, o getter consegue acessar os
     * atributos privados da classe. O getter dá aceso como se fosse
     * uma propriedade de classe. Não é possível atribuir nada por ele,
     * é read only.
     */
    get data() {
        return __classPrivateFieldGet(this, _data);
    }
    get quantidade() {
        return __classPrivateFieldGet(this, _quantidade);
    }
    get valor() {
        return __classPrivateFieldGet(this, _valor);
    }
    get volume() {
        return __classPrivateFieldGet(this, _quantidade) * __classPrivateFieldGet(this, _valor);
    }
}
_data = new WeakMap(), _quantidade = new WeakMap(), _valor = new WeakMap();
