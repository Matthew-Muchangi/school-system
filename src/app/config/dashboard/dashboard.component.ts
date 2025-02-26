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
  selectedStudent: any | null = null;
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
    this.studentService.getStudents().subscribe(
      (data) => {
        this.students = data;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Error fetching students';
        console.error('Error fetching students:', error);
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

  // ✅ Open Edit Modal
  editStudent(student: Student): void {
    this.selectedStudent = { ...student }; // Clone student data
  }

  // ✅ Update Student
  updateStudent(): void {
    if (this.selectedStudent) {
      this.studentService.updateStudent(this.selectedStudent.id, this.selectedStudent).subscribe(
        () => {
          this.successMessage = 'Student updated successfully!';
          this.selectedStudent = null;
          
          // ✅ Reload student list to ensure UI updates
          this.loadStudents();
        },
        (error) => {
          console.error('Error updating student:', error);
        }
      );
    }
  }
  

  // ✅ Close Modal
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
