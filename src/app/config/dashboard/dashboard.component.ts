import { Component, OnInit, HostListener } from '@angular/core';
import { StudentService, Student } from '../../services/student.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoading: boolean = true;
  students: Student[] = [];
  errorMessage: string = '';
  adminName: string = 'Loading...';
  searchQuery: string = '';
  dropdownOpen: string | null = null;
  subjectCount: number = 0;
  selectedStudent: Student | null = null;
  successMessage: string = '';

  constructor(
    private studentService: StudentService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.fetchLoggedInUser();
    this.loadStudents();
    this.loadSubjects();
  }

  fetchLoggedInUser(): void {
    const user = localStorage.getItem('username') || 'Admin';
    this.adminName = user;
  }

  loadStudents(): void {
    this.isLoading = true;  // Show loading state
    this.studentService.getStudents().subscribe(
      (data) => {
        console.log("Students fetched:", data); // Debugging: Log the response
        this.students = data;
        this.isLoading = false;
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
      },
      (error) => {
        console.error('Error fetching subjects:', error);
        this.subjectCount = 0;
      }
    );
  }

  editStudent(student: Student) {
    this.selectedStudent = { ...student }; // Create a copy to prevent instant changes
  }

  updateStudent() {
    if (this.selectedStudent) {
      console.log("Updating Student:", this.selectedStudent); // Debugging: Check the student data
  
      this.studentService.updateStudent(this.selectedStudent).subscribe(
        (response) => {
          console.log("Student updated successfully:", response); // Debugging: Log response
          this.loadStudents(); // Refresh student list
          this.successMessage = 'Student updated successfully!';
          this.closeModal();
        },
        (error) => {
          console.error('Error updating student:', error);
        }
      );
    } else {
      console.warn("No student selected for update!"); // Debugging: Log if no student is selected
    }
  }
  

  closeModal(): void {
    this.selectedStudent = null;
  }

  toggleDropdown(menu: string): void {
    this.dropdownOpen = this.dropdownOpen === menu ? null : menu;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event): void {
    if (!(event.target as HTMLElement).closest('.dropdown-container')) {
      this.dropdownOpen = null;
    }
  }
}
