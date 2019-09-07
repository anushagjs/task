import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../services/patient.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }
  dataSource =[];
  displayedColumns =['Name','Contact No','Tests Perfomed'];
  ngOnInit() {
    let patientRecords = JSON.parse(localStorage.getItem('user'));
 
    patientRecords = patientRecords.map( records => {
        let getPatientsTests = records.patientTests.length;
        records['id']= Math.floor(Math.random() * Math.floor(100));
        records['testsDone']= Math.floor(Math.random() * Math.floor(getPatientsTests)) + 1;
        records['testsPerfomed'] =  records['testsDone'] +'/'+ getPatientsTests;
        return records;  
    });
    this.dataSource = patientRecords;
  }
  getPatientDetails(item){
    console.log(item);
    this.router.navigate(['/patientDetail', JSON.stringify(item)],{ skipLocationChange: true});
  }

}
