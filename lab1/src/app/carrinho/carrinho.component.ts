import { CarrinhoService } from './../carrinho.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {

  itens = this.carrinhoService.pegarItens();

  finalizarForm = this.formBuilder.group({
    nome: '',
    endereco: ''
  })

  constructor(private route: ActivatedRoute,
    private carrinhoService: CarrinhoService,
    private formBuilder: FormBuilder) { }

  onSubmit(): void {
    this.itens = this.carrinhoService.limparCarrinho();
    console.warn('Seu pedido foi enviado', this.finalizarForm.value);
    this.finalizarForm.reset();
  }

}
