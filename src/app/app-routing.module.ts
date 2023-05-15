import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageServiceComponent } from './page-service/page-service.component';
import { PagePeliculasComponent } from './page-peliculas/page-peliculas.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'service', component: PageServiceComponent },
  { path : 'contact', component: PageContactComponent },
  { path : 'peliculas', component: PagePeliculasComponent},
  { path : 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
