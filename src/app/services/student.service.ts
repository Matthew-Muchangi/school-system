import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  admissionNumber: number;
  firstName: string;
  lastName: string;
  dateofbirth: string;
  schoolClass: number;
  stream: number;
  address: string;
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
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentUrl, student);
  }
}
