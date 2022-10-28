import { NegociacaoController } from "./controllers/negociacao-controller.js";
//Atentar para colocar o .js no final porque o auto import ñ o traz

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => { //O TS já infere esse tipo event
  event.preventDefault(); //Cancela o refresh default da page ao submeter o form
  controller.adiciona();
})

//Toda vez que o form for chamado, add o método adiciona()
/**O TS informa, após o querySelector, que está sendo retornado 
 * um item do tipo "element". Ou seja, o form ganhou um tipo implícito (element),
 * por isso ele tem o addEventListener (todo element tem).
 */
/**Todo formulário quando é submetido faz o refresh da página.
 * Esta aplicação tenta copiar um SPA, assim é necessário cancelar o evento padrão
 *do formulário, que é a submissão.
 */