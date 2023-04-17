import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
})
export class RegisterationComponent {
  @Output() myEvent = new EventEmitter();
  stdName = '';
  stdAge = '';

  Add() {
    let newStudent = { name: this.stdName, age: this.stdAge };
    this.stdAge = '';
    this.stdName = '';
    this.myEvent.emit(newStudent);
  }
}
