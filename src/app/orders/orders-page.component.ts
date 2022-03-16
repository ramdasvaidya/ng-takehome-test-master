import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AppDataApiService } from '../app-data/app-data-api.service';
import { Customer } from '../models/customer.interface';
import { Order } from '../models/order.interface';
import { Product } from '../models/product.interface';

@Component({
  template: `
    <select>
      <!-- 2. TODO implement a select to filter orders by customer name -->
    </select>
    <table>
      <thead>
        <th>Order Id</th>
        <th>Customer Name</th>
        <th>Order Date</th>
        <th>Product Name</th>
      </thead>
      <tbody>
        <tr *ngFor="let order of customers$ | async">
        <td>{{ order.id }}</td>
        <td>{{ getCustomerNameById(order.customerId) }}</td>
        <td>{{ order.date | date: 'dd/MM/yyyy'}}</td>
        <td>{{ getProductNameById(order.productId) }}</td>
        </tr>
      </tbody>
    </table>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class OrdersPageComponent {

  Orders$!: any;
  customers$!: any;
  products$!:any;
  customerData: any;
  productData: any;
  orderData: any;

  constructor(private appDataApiService: AppDataApiService) { }
 
  // Get orders
  getOrders() {
    this.Orders$ = this.appDataApiService.orders$;
  }

   // Get customers
  getCustomers() {
    this.customers$ = this.appDataApiService.customers$.pipe(map((response: Customer[]) => {
      this.customerData = response;
      return response;
    }));
  }

  // Get Products
  getProducts() {
    this.products$ = this.appDataApiService.products$.pipe(map((response: Product[]) => {
      this.productData = response;
      return response;
    }));
  }

  getCustomerNameById = (id:number) => {
    //console.log(this.customers$);
    // this.customers$.pipe(map((response: Customer[]) => {
    //   this.customerData = response;
    //   console.log(this.customerData);
    //   return 'Test';
    // }));
  }

  getProductNameById = (id:number) => {

    // this.products$.pipe(map((response: Product[]) => {
    //   this.productData = response;
    //   console.log(this.productData);
    //   return 'Test2';
    // }));
  }
 
  ngOnInit() {
    //this.getCustomers();
    //this.getProducts();
    

    this.appDataApiService.customers$.pipe(map((response: any) => {
      this.customerData = response;
      console.log(response);
      return response;
    }));

    this.customers$ = this.appDataApiService.products$.pipe(map((response: any) => {
      this.productData = response;
      console.log(response);
      return response;
    }));

    this.Orders$ = this.appDataApiService.orders$.pipe(map((response: any) => {
      this.customerData = response;
      console.log(response);
      return response;
    }));
;
  }
}
