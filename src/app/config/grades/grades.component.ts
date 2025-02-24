import { Component } from '@angular/core';

@Component({
  selector: 'app-grading-system',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  marks: number | null = null;
  grade: string = '';
  gradeColor: string = 'black';

  calculateGrade() {
    if (this.marks === null || this.marks < 0 || this.marks > 100) {
      this.grade = '';
      return;
    }

    if (this.marks >= 90) {
      this.grade = 'A';
      this.gradeColor = 'green';
    } else if (this.marks >= 80) {
      this.grade = 'A-';
      this.gradeColor = 'darkgreen';
    } else if (this.marks >= 75) {
      this.grade = 'B+';
      this.gradeColor = 'blue';
    } else if (this.marks >= 70) {
      this.grade = 'B';
      this.gradeColor = 'darkblue';
    } else if (this.marks >= 65) {
      this.grade = 'B-';
      this.gradeColor = 'purple';
    } else if (this.marks >= 60) {
      this.grade = 'C+';
      this.gradeColor = 'orange';
    } else if (this.marks >= 50) {
      this.grade = 'C';
      this.gradeColor = 'darkorange';
    } else if (this.marks >= 40) {
      this.grade = 'D';
      this.gradeColor = 'red';
    } else {
      this.grade = 'E (Fail)';
      this.gradeColor = 'darkred';
    }
  }
}
