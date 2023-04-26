import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private readonly myClient: HttpClient) {}
  //URL
  private readonly Base_URL = 'http://localhost:3000/students';
  //Methods [All Requests]
  GetAllStudents() {
    return this.myClient.get(this.Base_URL);
  }
  GetStudentByID(id: any) {
    return this.myClient.get(this.Base_URL + '/' + id);
  }
  AddNewStudent(newStudent: any) {
    return this.myClient.post(this.Base_URL, newStudent);
  }
  DeleteStudentById(id: any) {
    return this.myClient.delete(this.Base_URL + '/' + id);
  }
  UpdateStudent(id: any, updatedStudent: any) {
    return this.myClient.put(this.Base_URL + '/' + id, updatedStudent);
  }
}
