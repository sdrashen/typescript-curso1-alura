import { Negociacao } from "./models/negociacao.js";

// const negociacao = new Negociacao(new Date(), 10, 100);
// console.log(negociacao);
// negociacao.quantidade = 10000;
// console.log(negociacao);

/**Conseguimos alterar quantidade mas não a quantidade privada da instância de negociação.
 * O JS por ser uma linguagem dinâmica, ele add a property "quantidade" dinamicamente
 * nesse objeto. Ele não consegue ter relação nenhuma com a quantidade que está
 * internamente na classe.
 */

const negociacao = new Negociacao(new Date()); //TS acuses error here.
console.log(negociacao.volume);

/**O get dá acesso como se fosse uma propriedade de classe. */