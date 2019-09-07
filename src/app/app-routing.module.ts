import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientRecordComponent} from '../app/components/patient-record/patient-record.component';
import {DashboardComponent} from '../app/components/dashboard/dashboard.component';
import {PatientDetailComponent} from '../app/components/patient-detail/patient-detail.component';
const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
{
  path: 'addPatient',
  component: PatientRecordComponent,
},
{
  path: 'patientDetail/:id',
  component: PatientDetailComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
