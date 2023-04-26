import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { StudentsDetailsComponent } from './Components/students-details/students-details.component';
import { StudentsComponent } from './Components/students/students.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { StudentUpdateComponent } from './Components/student-update/student-update.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentsDetailsComponent },
  { path: 'addstudent', component: AddStudentComponent },
  { path: 'students/:id/edit', component: StudentUpdateComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
