import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent {
  id: any = 0;
  student: any;
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

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');

    for (let std of this.Students) {
      if (std.id == this.id) {
        this.student = std;
      }
    }
  }
}
