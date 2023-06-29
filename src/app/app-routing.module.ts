import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { PageComponent } from './page/page.component';
import { LoginComponent } from './login/login.component';
import { MemberAuthGuard } from './member-auth.guard';
import { PermanentaddressComponent } from './permanentaddress/permanentaddress.component';
import { CurrentaddressComponent } from './currentaddress/currentaddress.component';

const routes: Routes = [
  { path: '', component: PageComponent },
  {
    path: 'addressdetails',
    //component: AddressComponent,
    canActivateChild: [MemberAuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'permaddress' },
      { path: 'permaddress', component: PermanentaddressComponent },
      { path: 'curaddress', component: CurrentaddressComponent },
    ],
  },
  { path: 'personalInfo', component: PersonalInformationComponent },
  { path: 'logindetails', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
