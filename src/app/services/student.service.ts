import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  id(id: any, selectedStudent: any): unknown;
  admissionNumber: number;
  firstName: string;
  lastName: string;
  dateofbirth: string;
  schoolClass: number;
  stream: number;
  address: string
    street: string;
    city: string;
    country: string;
    postalCode: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentUrl = 'http://172.16.8.12:8764/api/students'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Fetch students from the backend
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl);
  }

  // Add a new student to the backend
  addStudent(student:any): Observable<Student> {
    return this.http.post<Student>(`${this.studentUrl}/register`, student);
  }
  updateStudent(id: number, student: any): Observable<any> {
    return this.http.put(`${this.studentUrl}/${id}`, student);
  }

}
