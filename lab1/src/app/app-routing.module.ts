import { EntregaComponent } from './entrega/entrega.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DetalheProdutosComponent } from './detalhe-produtos/detalhe-produtos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

const routes: Routes = [
  { path: '', component: ListaProdutosComponent },
  { path: 'produtos/:produtotId', component: DetalheProdutosComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'entrega', component: EntregaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
