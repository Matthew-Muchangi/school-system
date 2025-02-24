import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  configDropdownOpen = false;
  studentsDropdownOpen = false;

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
