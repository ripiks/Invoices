import { Customer } from '../Models/Customers';
import { Purchase } from '';


export interface Invoice {
    invoiceNumber: number; // cislo faktury
    createdAt: string; // kde byla vystavena
    customer: Customer; // kdo objednal
    totalPrice: number; // kolik bude stat celkem
    purchase: Purchase[]; // seznam objednanych veci ?
    status: string; // objednano-zaplaceno nebo ne
    paymentType: string; // jak se plati-cash/card/prevod
}
