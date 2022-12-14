export class Negociacao {
  private _data: Date;
  private _quantidade: number;
  private _valor: number;

  constructor(data: Date, quantidade: number, valor: number) { //No TS o tipo vem depois
    /**Tendo definido os devidos tipos
     * o TS consegue entender nos outros campos
     * o tipo em questão. Ainda assim é interessante informa o tipo
     * também nos atributos.
     */
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
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
    return this._data;
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }

  get volume() {
    return this._quantidade * this._valor;
  }
}

/**Um getter ñ pode ter o mesmo nome de uma propriedade encapsulada dentro da sua classe.
 * Por isso, mudamos de # para _. Esse _ é uma conveção antiga do JS
 * para indicar que algo é privado, que vc ñ everai acessar aquilo fora
 * do domínio de sua classe.
 * É necessário inserir o modificador private porque só com o _
 * seria ainda possível acessar alterar as propriedades internas em negociação em app.ts
 * O _ ñ é obrigatório para privar as propriedades, o private sozinho já faz isso.
 * O TS permite omitir o tipo public quando nenhum modificador é definido.
*/
