import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientRecordComponent } from './components/patient-record/patient-record.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule,MatInputModule,MatFormFieldModule,
  MatSelectModule,MatTableModule } from '@angular/material';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientRecordComponent,
    PatientDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports:[MatFormFieldModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
