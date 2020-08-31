import { Customer } from './customers';
import { Product } from './product';
import * as moment from 'moment';

//import { Purchase } from './product';


export interface Invoice {
    invoiceNumber: number; // cislo faktury
    createdAt: moment.Moment; // kde byla vystavena
    paydate: moment.Moment;
    customer: Customer; // kdo objednal
    totalPrice: number; // kolik bude stat celkem
  //  purchase: Purchase[]; // seznam objednanych veci ?
    status: string; // objednano-zaplaceno nebo ne

    products: Product[];

}
