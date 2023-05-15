import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageServiceComponent } from './page-service/page-service.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagePeliculasComponent } from './page-peliculas/page-peliculas.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    PageHomeComponent,
    PageServiceComponent,
    PageContactComponent,
    PhoneNumberComponent,
    FormComponent,
    PagePeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
