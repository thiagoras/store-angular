import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { AlertaProdutosComponent } from './alerta-produtos/alerta-produtos.component';
import { DetalheProdutosComponent } from './detalhe-produtos/detalhe-produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EntregaComponent } from './entrega/entrega.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    ListaProdutosComponent,
    AlertaProdutosComponent,
    DetalheProdutosComponent,
    CarrinhoComponent,
    EntregaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
