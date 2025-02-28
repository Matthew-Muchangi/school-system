import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit, AfterViewInit {

  student: any = {}; 
 
  isLoading: boolean = true; 
  errorMessage: string = '';

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadStudentProfile();
  }

  ngAfterViewInit(): void {
    this.loadCharts();
  }

  // ✅ Fetch Student Data
  loadStudentProfile(): void {
    const admissionNumber = this.route.snapshot.paramMap.get('admissionNumber'); 
    if (admissionNumber) {
      this.studentService.getStudentbyadmissionNumber(admissionNumber).subscribe(
        (data) => {
          if (data) {
            this.student = data;
          
            this.loadCharts(); 
          } else {
            this.errorMessage = "Student data not found.";
          }
          this.isLoading = false; 
        },
        (error) => {
          console.error('Error fetching student data:', error);
          this.errorMessage = 'Failed to load student data.';
          this.isLoading = false; 
        }
      );
    }
  }

  // ✅ Update Stats Dynamically
 

  // ✅ Load Charts Dynamically
  loadCharts(): void {
    if (!this.student?.subjects || this.student.subjects.length === 0) return; 

    setTimeout(() => {
      new Chart("interestChart", {
        type: 'radar',
        data: {
          labels: this.student.subjects.map((sub: any) => sub.name), 
          datasets: [
            {
              label: 'Current Score',
              data: this.student.subjects.map((sub: any) => sub.score || 0), 
              borderColor: 'blue',
              fill: false
            },
            {
              label: 'Class Average',
              data: this.student.subjects.map((sub: any) => sub.classAverage || 0),
              borderColor: 'gray',
              fill: false
            }
          ]
        }
      });

      
    }, 500);
  }
}
