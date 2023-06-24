import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';

const routes: Routes = [
  { path: 'addressdetails', component: AddressComponent },
  { path: 'personalInfo', component: PersonalInformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
