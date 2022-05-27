import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
  public instructors = [
  {
    name: "John",
    password : "123"
  },
  {
    name: "John",
    password : "123"
  },
  {
    name: "John",
    password : "123"
  }


   ]
  constructor() { }

  ngOnInit(): void {
  }

}
