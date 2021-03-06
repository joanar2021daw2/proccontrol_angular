import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassosFormComponent } from './passos-form/passos-form.component';
import { PassosListComponent } from './passos-list/passos-list.component';
import { ProcesDetailsComponent } from './proces-details/proces-details.component';
import { ProcesFormComponent } from './proces-form/proces-form.component';
import { ProcesListComponent } from './proces-list/proces-list.component';
import { UpdateProcesComponent } from './update-proces/update-proces.component';

const routes: Routes = [
  {path: '', redirectTo: 'proces', pathMatch: 'full'},
  {path: 'proces', component: ProcesListComponent },
  {path: 'passos', component: PassosListComponent},
  {path: 'newproces', component: ProcesFormComponent},
  {path: 'update-proces/:idProces', component: UpdateProcesComponent},
  {path: 'proces-details/:idProces', component: ProcesDetailsComponent},
  {path: 'passos-form', component: PassosFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
