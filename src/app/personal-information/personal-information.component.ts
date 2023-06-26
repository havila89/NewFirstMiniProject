import { Component, Input } from '@angular/core';

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
  spousename = '';
  location = '';
  @Input() formInfo: any;
}
