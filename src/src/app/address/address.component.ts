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
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  mstatus = '';
  location = 'India';
  spousename = '';
  isSubmit = false;
  addressForm: any;

  constructor() {}
  //show zipcode/pincode based on location
  SelectLocation($event: any) {
    return this.location;
  }
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
  ngOnInit() {}
}
