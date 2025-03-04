import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { StudentService, Student } from '../../services/student.service';
import { ConfigService } from 'src/app/services/config.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('studentChart') studentChart!: ElementRef;
  @ViewChild('subjectChart') subjectChart!: ElementRef;

  isLoading: boolean = true;
  students: Student[] = [];
  subjectCount: number = 0;
  subjectsData: { subjectName: string; count: number }[] = [];
  errorMessage: string = '';
  adminName: string = 'Loading...';
  selectedStudent: Student | null = null;
  successMessage: string = '';
  studentChartInstance: Chart | null = null;
  subjectChartInstance: Chart | null = null;
  subjectMap: { [key: number]: string } = {};

  constructor(private studentService: StudentService, private configService: ConfigService) {}

  ngOnInit(): void {
    this.fetchLoggedInUser();
    this.loadStudents();
    this.loadSubjects();
    
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.studentChart) {
        this.renderStudentChart();
      }
      if (this.subjectChart) {
        this.renderSubjectChart();
      }
    }, 500);
  }

  fetchLoggedInUser(): void {
    const user = localStorage.getItem('username') || 'Admin';
    this.adminName = user;
  }

  loadStudents(): void {
    this.isLoading = true;
    this.studentService.getStudents().subscribe(
      (data) => {
        this.students = data;
        this.isLoading = false;
        this.updateStudentChart();
      },
      (error) => {
        console.error('Error loading students:', error);
        this.errorMessage = 'Failed to load students. Please try again.';
        this.isLoading = false;
      }
    );
  }

  loadSubjects(): void {
    this.configService.getSubjects().subscribe(
      (subjects) => {
        this.subjectCount = subjects.length;

        // Count occurrences of each subject
        const subjectCounts: { [key: string]: number } = {};
        subjects.forEach((subject: any) => {
          subjectCounts[subject.subjectName] = (subjectCounts[subject.subjectName] || 0) + 1;
        });

        this.subjectsData = Object.keys(subjectCounts).map((subjectName) => ({
          subjectName,
          count: subjectCounts[subjectName]
        }));

        this.updateSubjectChart();
      },
      (error) => {
        console.error('Error fetching subjects:', error);
      }
    );
  }

  editStudent(student: Student): void {
    this.selectedStudent = { ...student };
  }

  updateStudent(): void {
    if (this.selectedStudent) {
      this.studentService.updateStudent(this.selectedStudent).subscribe(
        () => {
          this.loadStudents();
          this.successMessage = 'Student updated successfully!';
          this.closeModal();
        },
        (error) => {
          console.error('Error updating student:', error);
        }
      );
    }
  }

  closeModal(): void {
    this.selectedStudent = null;
  }

  // Render Student Chart
  renderStudentChart(): void {
    if (this.studentChartInstance) {
      this.studentChartInstance.destroy();
    }

    this.studentChartInstance = new Chart(this.studentChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Total Students'],
        datasets: [{
          label: 'Number of Students',
          data: [this.students.length],
          backgroundColor: '#4CAF50',
          borderColor: '#388E3C',
          borderWidth: 5
        }]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  // Render Subject Chart
  renderSubjectChart(): void {
    if (this.subjectChartInstance) {
      this.subjectChartInstance.destroy();
    }

    this.subjectChartInstance = new Chart(this.subjectChart.nativeElement, {
      type: 'bar',
      data: {
        labels: this.subjectsData.map(data => data.subjectName),
        datasets: [{
          label: 'Total Subjects',
          data: this.subjectsData.map(data => data.count),
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  // Update Student Chart
  updateStudentChart(): void {
    if (this.studentChartInstance) {
      this.studentChartInstance.data.datasets[0].data = [this.students.length];
      this.studentChartInstance.update();
    } else {
      this.renderStudentChart();
    }
  }

  // Update Subject Chart
  updateSubjectChart(): void {
    if (this.subjectChartInstance) {
      this.subjectChartInstance.data.labels = this.subjectsData.map(data => data.subjectName);
      this.subjectChartInstance.data.datasets[0].data = this.subjectsData.map(data => data.count);
      this.subjectChartInstance.update();
    } else {
      this.renderSubjectChart();
    }
  }



  
}
