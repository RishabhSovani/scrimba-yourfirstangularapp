import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from '../../shared/interfaces';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = [] // storing original value
  @Input() get customers() : ICustomer[]{
return this._customers;
  }
  set customers(value: ICustomer[]){
    if (value) {
this.filteredCustomers = this._customers = value
this.calculateOrders()
    }

  }

  // @Input() customers: any[] = [];
    filteredCustomers: ICustomer[] = []; // stores filtered value
    customersOrderTotal: number = 0;
    currencyCode: string = 'INR'
    constructor() {}

    ngOnInit() {
    }
    // ngOnChanges(changes: SimpleChanges){

    // }
    calculateOrders() {
      this.customersOrderTotal = 0;
      this.filteredCustomers.forEach((cust: ICustomer) => {
          this.customersOrderTotal += cust.orderTotal ? cust.orderTotal : 0 ;
      });
  }
  filter(data: string) {
    if (data) {
        this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
            return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   (cust.orderTotal && cust.orderTotal.toString().indexOf(data) > -1);
        });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
}
  sort(prop: string){
    //sorter service will handel the sorting
  }
}
