import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentsComponent } from './apartments/apartments.component';
import { Apartment } from './core/models/apartment';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidencesComponent } from './residences/residences.component';

//1- configurer les routes
const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:ResidencesComponent, children:[
    {path:"apartments/:id", component:ApartmentsComponent},
  ]},
 // {path:"apartments/:id", component:ApartmentsComponent},
  {path:"addResidence", component:FormResidenceComponent},
  {path:"add", component:FormApartmentComponent},
  //le path "**" doit être toujours la dernière route
  {path:"**", component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
