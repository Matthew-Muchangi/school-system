import { Component } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
  studentName: string = 'Student';
  notifications: number = 3;

  dashboardStats = {
    courses: 8,
    assignments: 12,
    FeeBalance: 300,
    gpa: 3.8
  };

  courses = [
    { name: 'Mathematics', code: 'MATH101', instructor: 'Dr. Smith', credits: 3 },
    { name: 'Computer Science', code: 'CS102', instructor: 'Prof. Johnson', credits: 4 },
  ];

  constructor() {}

  getNotifications(): string {
    return this.notifications > 0 ? `${this.notifications} new notifications` : 'No new notifications';
  }
}
