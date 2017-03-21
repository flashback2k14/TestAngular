import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {

  @Output() onSubmitted:EventEmitter<any> = new EventEmitter();

  @Output() onCancelled:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(newPerson){
    this.onSubmitted.emit(newPerson);
  }

  onCancel(event){
    event.preventDefault();
    this.onCancelled.emit();
  }

}
