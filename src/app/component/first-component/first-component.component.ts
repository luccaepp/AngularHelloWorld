import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name:String = "Lucca";
  age:Number = 23;
  job:String = "Programador";
  hobbies = ["gaita", "acampar"];

  constructor() { }

  ngOnInit(): void {
  }

}
