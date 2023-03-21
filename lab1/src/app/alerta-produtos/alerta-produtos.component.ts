import { Produto } from './../produtos';
import { Component, EventEmitter, Input, Output,  } from '@angular/core';

@Component({
  selector: 'app-alerta-produtos',
  templateUrl: './alerta-produtos.component.html',
  styleUrls: ['./alerta-produtos.component.scss']
})
export class AlertaProdutosComponent {
  @Input() produto!: Produto;
  @Output() alerta = new EventEmitter();
}
