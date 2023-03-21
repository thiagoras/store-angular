import { Observable } from 'rxjs';
import { CarrinhoService } from './../carrinho.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.scss']
})
export class EntregaComponent {

  custosEntrega!: Observable<{ tipo: string, preco: number }[]>;

  ngOnInit(): void {
    this.custosEntrega = this.carrinhoService.pegarPrecosEntrega();
  }
  constructor(private carrinhoService: CarrinhoService) { }
}
