import {OrderProduct} from './order-product';

export abstract class Order {

  company: string;

  country: string;
  city: string;
  zipcode: string;

  street: string;
  streetNumber: string;
  addressExtra: string;


  orderNotes: string;

  products: OrderProduct[] = [];


}
