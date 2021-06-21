import { Component, Input } from '@angular/core';

export interface student
{
     id:number,
     age:number,
     name:string,
     dob:Date,
     grade:number,
     profile:string

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:String="TestingApp";

  TestingMetod()
  {
  return 0;
  }

  students:student[]=[

     {
      id:1,
     age:15.9,
     name:'Rahul',
     dob:new Date(1993,9,8),
     grade:8.2,
     profile:"https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
     },
     {
      id:1,
     age:15.9,
     name:'Rahul',
     dob:new Date(1999,9,8),
     grade:8.02,
     profile:"https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
     },
     {
      id:1,
     age:15.9,
     name:'Rahul',
     dob:new Date(1993,9,8),
     grade:8.2,
     profile:"https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
     },
     {
      id:1,
     age:15.9,
     name:'Rahul',
     dob:new Date(1999,9,8),
     grade:8.02,
     profile:"https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
     }
  ]

}
