import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-grades-report',
  templateUrl: './grades-report.component.html',
  styleUrls: ['./grades-report.component.css'],
})
export class GradesReportComponent {
  admissionNumber: string = '';
  grades: { subject: string; grade: string;  }[] = [];
  subjects:{ subjectId: number; } | undefined

  constructor(private studentService: StudentService) {}

  fetchGrades() {
    if (this.admissionNumber.trim() === '') {
      alert('Please enter a valid admission number');
      return;
    }
  
    this.studentService.getGrades(this.admissionNumber).subscribe(
      (data: { subjectName: string; grade: string }[]) => {
        this.grades = data.map(item => ({
          subject: item.subjectName, // Renaming `subjectName` to `subject`
          grade: item.grade
        }));
      },
      (error) => console.error('Error fetching grades:', error)
    );
  }
  
  
}
