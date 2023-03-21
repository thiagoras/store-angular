import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab3';

  data1 = [{
    name: 'Sam Johnson',
    dept: 'Electrical',
    cpf: '25668515060'
  }, {
    name: 'Roy Thomas',
    dept: 'Mechanical',
    cpf: '80125320000'
  }, {
    name: 'Jim Lasker',
    dept: 'Medical',
    cpf: '60782914080'
  }]

}
