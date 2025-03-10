import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Subject {
subjectIds: any;
  id: number;  // Assuming each subject has an ID
  subjectName: string;
}

export interface Grade {
  minMark: number;
  maxMark: number;
  grade: string;
}



@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  addStudent(value: any) {
    throw new Error('Method not implemented.');
  }
  private subjectUrl = 'http://172.16.8.12:8763/api/config'; // Backend API URL

  constructor(private http: HttpClient) {}

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.subjectUrl}/subjects`);
  }

  getGrades(score: number): Observable<any> {
    return this.http.get(`${this.subjectUrl}/grades/score/${score}`, {
      responseType: 'text',
    });
  }

  // Fetch list of Classes from backend
  getClasses(): Observable<string[]> {
    return this.http.get<string[]>(`${this.subjectUrl}/class`);
  }

  // Fetch list of Streams from backend
  getStreams(): Observable<string[]> {
    return this.http.get<string[]>(`${this.subjectUrl}/streams`);
  }
}
