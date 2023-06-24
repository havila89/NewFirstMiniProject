import { Component, Input } from '@angular/core';
import { AddressComponent } from '../address/address.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  mstatus = '';
  location = '';
  @Input() formInfo: any;

  router = new Router();

  //navigating to another component
  update($event: any) {
    this.router.navigate(['/personalInfo']);
  }
}
