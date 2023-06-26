import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  //initializing variables
  router = new Router();
  /*firstname: string = '';
  lastname: string = '';
  email: string = '';
  mstatus = '';
  location = 'India';
  spousename = '';*/
  isSubmit = false;
  addressForm: any;
  address: Address | undefined;
  constructor() {}

  //navigating to another component
  onClickSubmit($event: any) {
    console.log($event);
    // this.router.navigate(['/personalInfo']);
    this.isSubmit = true;
  }
  onSubmit(addressForm: any) {
    console.log(addressForm.value.firstname);
    this.isSubmit = true;
    this.addressForm = addressForm.value;
  }
  ngOnInit() {
    this.address = {
      firstname: '',
      lastname: '',
      email: '',
      mstatus: false,
      spousename: '',
      location: 'India',
    };
  }
}
export class Address {
  //interface or model
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  mstatus: boolean | undefined;
  spousename: string | undefined;
  location: string | undefined;
}
