import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AddressComponent, PersonalInformationComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
