import { Customer } from './customers';
import { Product } from './product';
//import { Purchase } from './product';


export interface Invoice {
    invoiceNumber: number; // cislo faktury
    createdAt: string; // kde byla vystavena
    customer: Customer; // kdo objednal
    totalPrice: number; // kolik bude stat celkem
  //  purchase: Purchase[]; // seznam objednanych veci ?
    status: string; // objednano-zaplaceno nebo ne
    paydate: string;
    products: Product[];
}
