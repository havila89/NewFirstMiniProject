import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  @ViewChild('contactForm') addressForm: NgForm | undefined;

  //initializing variables
  router = new Router();
  /*firstname: string = '';
  lastname: string = '';
  email: string = '';
  mstatus = '';
  location = 'India';
  spousename = '';*/
  isSubmit = false;
  // addressForm: any;
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
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@test.com',
      mstatus: 'Yes',
      spousename: 'Jenny Doe',
      location: 'India',
      areacode: 1234,
    };
  }
}
export class Address {
  //interface or model
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  mstatus?: string | undefined;
  spousename?: string | undefined;
  location: string | undefined;
  areacode: number | undefined;
}
