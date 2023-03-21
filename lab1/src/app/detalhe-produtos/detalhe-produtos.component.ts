import { CarrinhoService } from './../carrinho.service';
import { Produto, produtos } from './../produtos';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-detalhe-produtos',
  templateUrl: './detalhe-produtos.component.html',
  styleUrls: ['./detalhe-produtos.component.scss']
})
export class DetalheProdutosComponent {

  produto: Produto | undefined;

  constructor(private route: ActivatedRoute,
    private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const produtoIdRoute = Number(routeParams.get('produtotId'));
    this.produto = produtos.find(produto => produto.id === produtoIdRoute);
  }

  adicionarCarrinho(produto: Produto) {
    this.carrinhoService.adicionarCarrinho(produto);
    window.alert('Seu produto foi adicionado ao carrinho!');
  }
}
