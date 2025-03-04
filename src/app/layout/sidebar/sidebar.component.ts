import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  configDropdownOpen = false;
  studentsDropdownOpen = false;
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to login after logout
  }

  toggleConfigDropdown() {
    this.configDropdownOpen = !this.configDropdownOpen;
    if (this.configDropdownOpen) {
      this.studentsDropdownOpen = false; // Close other dropdowns
    }
  }

  toggleStudentsDropdown() {
    this.studentsDropdownOpen = !this.studentsDropdownOpen;
    if (this.studentsDropdownOpen) {
      this.configDropdownOpen = false; // Close other dropdowns
    }
  }
}
