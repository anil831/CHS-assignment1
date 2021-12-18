import { Component,OnInit} from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../schemas/contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  currentSection: string = 'allContacts';
  icons = {
    contacts: '../assets/address-book-regular.svg',
    serviceProviders: '../assets/university-solid.svg',
    beneficiaries: '../assets/truck-solid.svg',
    customers: '../assets/handshake-solid.svg',
    employees: '../assets/users-solid.svg',
  };

  constructor(private _ContactsService: ContactsService) {}

  selectCard(card: string) {
    this.currentSection = card;
    if (this.currentSection === 'allContacts') {
      this.allContacts();
    } else if (this.currentSection === 'serviceProviders') {
      this.serviceProviders();
    } else if (this.currentSection === 'beneficiaries') {
      this.beneficiaries();
    } else if (this.currentSection === 'customers') {
      this.customers();
    } else if (this.currentSection === 'employees') {
      this.employees();
    }
  }

  ngOnInit(): void {
    if (this.currentSection === 'allContacts') {
      this.allContacts();
    } else if (this.currentSection === 'serviceProviders') {
      this.serviceProviders();
    } else if (this.currentSection === 'beneficiaries') {
      this.beneficiaries();
    } else if (this.currentSection === 'customers') {
      this.customers();
    } else if (this.currentSection === 'employees') {
      this.employees();
    }
  }

  allContacts(): void {
    this._ContactsService.getContacts().subscribe((res) => {
      this.contacts = res;
    });
  }
  beneficiaries() {
    this._ContactsService.getBeneficiaries().subscribe((res) => {
      this.contacts = res;
    });
  }
  serviceProviders() {
    this._ContactsService.getServiceProviders().subscribe((res: any) => {
      this.contacts = res;
    });
  }

  customers() {
    this._ContactsService.getCustomers().subscribe((res: any) => {
      this.contacts = res;
    });
  }
  employees() {
    this._ContactsService.getCustomers().subscribe((res: any) => {
      this.contacts = res;
    });
  }
}
