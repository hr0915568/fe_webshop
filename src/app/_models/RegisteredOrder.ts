import {Order} from './order';
import {OrderProduct} from './order-product';

export  class RegisteredOrder extends  Order{

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
