import { Component } from '@angular/core';
import { CustomerState } from "../store/reducer/customer.reducer";
import { Store, select } from "@ngrx/store";
import { selectCustomers } from "../store/selector/customer.selectors";
import { Customer } from "../../models/customer";
import { Observable } from "rxjs";

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})

export class CustomerViewComponent {

  customers$: Observable<Customer[]>;

  constructor(private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers))
  }
}
