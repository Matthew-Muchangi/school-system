import { Component, OnInit, HostListener } from '@angular/core';
import { StudentService, Student } from '../../services/student.service';
import { ConfigService,Subject } from 'src/app/services/config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
isLoading: any;
filteredStudents: any;
sortStudents(arg0: any) {
throw new Error('Method not implemented.');
}
errorMessage: any;
sortField: any;
filterStudents() {
throw new Error('Method not implemented.');
}
  adminName: string = 'Loading...'; // Default until fetched
  students: Student[] = [];
  dropdownOpen: string | null = null;
searchQuery: any;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.fetchLoggedInUser();
    this.loadStudents();
  }

  fetchLoggedInUser(): void {
    // Simulating fetching from an auth service or local storage
    const user = localStorage.getItem('username') || 'Student';
    this.adminName = user;
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
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
