import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

import { CdsModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactDetailsComponent,
    ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    CdsModule,
    ClarityModule,
    BrowserAnimationsModule
  ]
})
export class ContactsModule { }
