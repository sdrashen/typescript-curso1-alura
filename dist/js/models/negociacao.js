export class Negociacao {
  //Atributos privados #
  #data;
  #quantidade;
  #valor;

  constructor(data, quantidade, valor) {
    this.#data = data;
    this.#quantidade = quantidade;
    this.#valor = valor;
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
    return this.#data;
  }

  get quantidade() {
    return this.#quantidade;
  }

  get valor() {
    return this.#valor;
  }

  get volume() {
    return this.#quantidade * this.#valor;
  }
}
