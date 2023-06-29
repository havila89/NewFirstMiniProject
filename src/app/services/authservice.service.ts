import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor() {}
  get MemberAuth() {
    //Login for Member Auth
    return false;
  }
}
