import {Userprofile} from '../_models/userprofile';
import {Orderproducts} from '../_models/orderproducts';

export class Order {
    id: number;
    addressstreet: string;
    addressnumber: number;
    addressnumberadd: string;
    postalcode: string;
    ordertime: Date;
    user: Userprofile;
    orderproducts: Orderproducts;
  }