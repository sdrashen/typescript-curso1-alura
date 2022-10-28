import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
  private inputData;
  private inputQuantidade;
  private inputValor;

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
  }

  adiciona() {
    const negociacao = new Negociacao(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    console.log(negociacao);//E veremos que até agora os dados estão todos como string
  }
}

/**Objetivo aqui: criar a classe controller e uma instância dessa classe usando os dados pedidos(data, quantidade e valor)
 * e exibir essa instância no navegador.
 * O controller, uma classe na qual será criada uma instância, controla a interação do form 
 * com o botão de envio do dados (interações do user). O negociacao-controller pega os dados do form e cria o modelo.*/