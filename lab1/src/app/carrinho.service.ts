import { Produto } from './produtos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: Produto[] = [];

  constructor(private http: HttpClient) { }

  adicionarCarrinho(produto: Produto) {
    this.itens.push(produto);
  }
  pegarItens() {

    return this.itens;
  }

  limparCarrinho() {
    this.itens = [];
    return this.itens;
  }

  pegarPrecosEntrega () {
    return this.http.get<{tipo: string, preco: number}[]>
      ('/assets/entrega.json');
    }

}
