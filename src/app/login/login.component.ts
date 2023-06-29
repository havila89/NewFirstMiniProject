import { Component, OnInit, Directive } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //instance of the interface login
  userLogin = new login();

  ngOnInit() {}
}

//interface for Login Page user data
export class login {
  constructor(public name: string = '', public pwd: string = '') {}
}
