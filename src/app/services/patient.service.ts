import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patientData;
  constructor() {
    this.patientData={};
   }
  setPatientData(val: any){

    let getUserDetails = [];
   
    if(localStorage.getItem('user') !== null){
      getUserDetails = JSON.parse(localStorage.getItem('user'));
    } 
      getUserDetails.push(val);
      localStorage.setItem('user',JSON.stringify(getUserDetails));
  }
  getPatientData(){
    localStorage.getItem('user');
  }
}
