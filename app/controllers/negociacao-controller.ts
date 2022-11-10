import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
  }

  adiciona() {
    const exp = /-/g; /*Essa é uma expressão regular
    *A letra g indica que todos os hífens sejam encontrados*/
    const date = new Date(this.inputData.value.replace(exp, ','));
    /**O método replace pode reeceber como primeiro parâmetro a expressão regular
     * e como segundo o que se deseja colocar no lugar do - .
     */
    const quantidade = parseInt(this.inputQuantidade.value);
    //Através do parseInt conseguimos converter a quantidade para inteiro
    const valor = parseFloat(this.inputValor.value); //parseFloat porque esse valor pode ter decimais
    const negociacao = new Negociacao(date, quantidade, valor);

    console.log(negociacao);//E veremos que até agora os dados estão todos como string
  }
}

/**Objetivo aqui: criar a classe controller e uma instância dessa classe usando os dados pedidos(data, quantidade e valor)
 * e exibir essa instância no navegador.
 * O controller, uma classe na qual será criada uma instância, controla a interação do form 
 * com o botão de envio do dados (interações do user). O negociacao-controller pega os dados do form e cria o modelo.*/