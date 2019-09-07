import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router:Router) { }
  getPatientDet;
  testStatusDet;
  ngOnInit() {
    this.getPatientDet =  JSON.parse(this.route.snapshot.params.id);
    let status = ["Pass","Fail"],
    testName = this.getPatientDet.patientTests,
    Physicians =["Morgon","Fargo","Jack"]
    for(var i=0;i< this.getPatientDet.testsDone;i++){
      this.testStatusDet = new Map([
        ['Name Of Test',this.getRandomWord(testName)],
        ['Status', this.getRandomWord(status),],
        ['Date Of Test', this.randomDate(new Date(2019, 0, 1), new Date())],
        [ 'Name Of Physician',this.getRandomWord(Physicians)]
      ]);
    }
   
  }
  getRandomWord(words){
return words[Math.floor(Math.random() * words.length)];
  }
  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}
}
