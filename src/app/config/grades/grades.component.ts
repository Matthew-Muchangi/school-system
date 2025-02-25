import { Component } from '@angular/core';
import { ConfigService,Grade } from 'src/app/services/config.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  score: number | null = null;
  grade: string = '';
  errorMessage: string = '';

  constructor(private configService: ConfigService) {}

  checkGrade() {
    if (this.score === null || this.score < 0 || this.score > 100) {
      this.errorMessage = 'Invalid marks. Please enter a number between 0 and 100.';
      this.grade = '';
      return;
    }

    this.configService.getGrades(this.score).subscribe(
      (grades) => {
        console.log("Grades fetched:", grades);

        const matchedGrade = grades.find((g: { minMark: number; maxMark: number; }) => this.score! >= g.minMark && this.score! <= g.maxMark);
        
        if (matchedGrade) {
          this.grade = matchedGrade.grade;
          this.errorMessage = '';
        } else {
          this.grade = '';
          this.errorMessage = 'No grade found for this score.';
        }
      },
      (error) => {
        console.error('Error fetching grades:', error);
        this.grade = '';
        this.errorMessage = 'Could not fetch grades. Please try again later.';
      }
    );
  }
}
