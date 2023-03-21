import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from './../carrinho.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})
export class BarraSuperiorComponent {



  constructor(private route: ActivatedRoute,
    private carrinhoService: CarrinhoService) { }
}
