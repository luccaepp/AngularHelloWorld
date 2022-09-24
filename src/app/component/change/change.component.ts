import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  @Output() changeNumber : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  handleClick(): void{
   this.changeNumber.emit();
  }

}
