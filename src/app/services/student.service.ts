import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export interface Student {
  id: number;
  admissionNumber: number;
  firstName: string;
  lastName: string;
  dateofbirth: string;
  schoolClass: number;
  stream: string;
  address: {
    street: string;
    city: string;
    country: string;
    postalCode: string;
  };
  imageUrl?: string;  // Optional profile image
  subjects: { name: string; grade: string }[]; // Subjects list

}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentUrl = 'http://172.16.8.12:8764/api/students'; // Backend API URL

  constructor(private http: HttpClient) {}

  // ✅ Fetch all students
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl);
  }

  // ✅ Fetch a single student by ID
  getStudentById(studentId: string): Observable<Student> {
    return this.http.get<Student>(`${this.studentUrl}/${studentId}`);
  }

  getStudentbyadmissionNumber(admissionNumber:string):Observable<Student>{
    return this.http.get<Student>(`${this.studentUrl}/admission/${admissionNumber}`);
  }


  // ✅ Add a new student
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.studentUrl}/register`, student);
  }

  // ✅ Update student details
  updateStudent(student: any): Observable<any> {
    if (!student.id) {
      console.error("Error: Student ID is missing!");
      return throwError(() => new Error("Student ID is required for updating."));
    }
  
    const updateUrl = `${this.studentUrl}/${student.id}`; // Correct API format
    console.log("Updating student at:", updateUrl, "with data:", student); // Debugging
  
    return this.http.put(updateUrl, student);
  }
  
  
}
