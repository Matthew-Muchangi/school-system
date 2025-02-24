import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dropdownOpen: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(menu: string) {
    this.dropdownOpen = this.dropdownOpen === menu ? null : menu;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    if (!(event.target as HTMLElement).closest('.dropdown-container')) {
      this.dropdownOpen = null;
    }
  }
}
