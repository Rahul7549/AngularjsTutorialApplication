import { AppComponent } from './../../app.component';
import { Component, Input, OnInit } from '@angular/core';
import { student } from './../../app.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
@Input() students:student[]=[];
  constructor() {
    console.log("students are",this.students[1]);
  }

  ngOnInit(): void {
  }

}
