import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  Students: { id: number; name: string; age: number }[] = [
    {
      id: 1,
      name: 'Sondos',
      age: 24,
    },
    {
      id: 2,
      name: 'Mrwan',
      age: 25,
    },
    {
      id: 3,
      name: 'Mariam',
      age: 23,
    },
    {
      id: 4,
      name: 'Sara',
      age: 22,
    },
  ];
}
