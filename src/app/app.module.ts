import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { FormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';
import { SpouseNamePipe } from './spouse-name.pipe';

@NgModule({
  declarations: [AppComponent, AddressComponent, PersonalInformationComponent, PageComponent, SpouseNamePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
