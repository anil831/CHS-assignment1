import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../schemas/contacts'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

contactsURL:string="http://localhost:3000/contacts";
beneficiariesURL:string="http://localhost:3000/beneficiaries";
serviceProviders:string="http://localhost:3000/serviceProviders";
customersURL:string="http://localhost:3000/customers";
employeesURL:string="http://localhost:3000/employees";

  constructor(private http:HttpClient) {

   }

   getContacts():Observable<Contact[]>{
     return this.http.get<Contact[]>(this.contactsURL);
   }
   getBeneficiaries():Observable<Contact[]>{
     return this.http.get<Contact[]>(this.beneficiariesURL);
   }
   getServiceProviders(){
     return this.http.get(this.serviceProviders);
   }
   getCustomers(){
     return this.http.get(this.customersURL);
   }
   getEmployees(){
     return this.http.get(this.employeesURL);
   }
}
