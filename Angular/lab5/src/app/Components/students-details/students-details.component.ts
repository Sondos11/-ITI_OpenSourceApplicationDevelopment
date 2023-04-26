import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css'],
})
export class StudentsDetailsComponent implements OnInit {
  ID: any;
  student: any;
  constructor(myRoute: ActivatedRoute, public myService: StudentsService) {
    this.ID = myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.myService.GetStudentByID(this.ID).subscribe({
      next: (data) => {
        this.student = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
