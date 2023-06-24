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
  @Input() firstname: string = '';
  lastname: string = '';
  email: string = '';
  mstatus = '';
  location = '';
  spousename = '';

  constructor() {}
  //show zipcode/pincode based on location
  SelectLocation($event: any) {
    return this.location;
  }
  //navigating to another component
  onClickSubmit($event: any) {
    this.router.navigate(['/personalInfo']);
  }
  ngOnInit() {}
}
