import { Component } from '@angular/core';
import { ConfigService, Grade } from 'src/app/services/config.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  score: number | null = null;
  grades:any;
  errorMessage: string = '';

  constructor(private configService: ConfigService) {}

  checkGrade() {
    if (this.score === null || this.score < 0 || this.score > 100) {
      this.errorMessage = 'Invalid marks. Please enter a number between 0 and 100.';
      // this.grade = '';
      return;
    }

    this.configService.getGrades(this.score).subscribe(
      (grades: Grade) => { 
        console.log("Grades fetched:", grades);
        
         this.grades = grades

        // if (grades) { // Check if a valid grade is returned
        //   this.grade = grades.grade;  // ✅ Assign the fetched grade
        //   this.errorMessage = '';     // ✅ Clear any previous error messages
        // } else {
        //   this.grade = '';
        //   this.errorMessage = 'No grade found for the entered marks.';
        // }
      },
      (error) => {
        console.error('Error fetching grades:', error);
        this.grades = '';
        this.errorMessage = 'Could not fetch grades. Please try again later.';
      }
    );
  }
}
