import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../schemas/contacts';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  selected:Contact[]=[];

  contactsIcon:string="../../../assets/address-book-regular.svg";
  userLockIcon:string="../../../assets/user-lock-solid.svg";
  chatIcon:string="../../../assets/comments-regular.svg";
  mobileIcon:string="../../../assets/mobile-alt-solid.svg";

  constructor() { }
  @Input() contacts:Contact[]=[];
  @Input() currentSection:string="";


  ngOnInit(): void {
  }

}
