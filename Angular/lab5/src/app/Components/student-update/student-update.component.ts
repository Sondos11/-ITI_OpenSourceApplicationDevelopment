import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css'],
})
export class StudentUpdateComponent implements OnInit {
  ID: any;
  studentData: any;
  constructor(
    myRoute: ActivatedRoute,
    public myService: StudentsService,
    private router: Router
  ) {
    this.ID = myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.myService.GetStudentByID(this.ID).subscribe({
      next: (data) => {
        this.studentData = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  UpdateStudent(
    name: any,
    age: any,
    email: any,
    phone: any,
    website: any,
    address: any
  ) {
    let updatedStudent = { name, age, email, website, address, phone };
    this.myService.UpdateStudent(this.ID, updatedStudent).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
