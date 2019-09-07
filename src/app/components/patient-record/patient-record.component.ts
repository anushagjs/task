import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Tests } from '../../models/tests.model';
import {PatientService} from '../../services/patient.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.scss']
})
export class PatientRecordComponent implements OnInit {

  constructor(private patientService: PatientService,
    private router:Router) {  }
  tests :Tests[] =[
    {value:'blood_test',text:'Blood test'},
    {value:'allergy_test',text:'Allergy test'},
    {value:'ecg',text:'ECG'},
    {value:'eye_test',text:'Eye test'},
    {value:'bp',text:'Blood pressure'},
  ];
  ngOnInit() {
  }
  addPatientForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    contactNo: new FormControl(''),
    patientTests: new FormControl('')
  });
  onSubmit(){
    let patientDetails = this.addPatientForm.value;
    this.patientService.setPatientData(patientDetails);
    this.router.navigate(['/dashboard']);
  }
}
