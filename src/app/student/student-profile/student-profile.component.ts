import { Component, OnInit, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: []
})
export class StudentProfileComponent implements OnInit, AfterViewInit {

  student = {
    name: 'Double M',
    description: 'Form 4 Student',
    imageUrl: 'src/assets/matthew.jpg' // Update with the correct path
  };

  stats = [
    { title: 'Total Subjects', value: '10'},
    { title: 'Average Grade', value: 'B'},
    { title: 'Form', value: '4'},
    { title: 'Class', value: 'West'}
  ];

  audienceData = [
    { country: 'Brazil', audiences: 2304902, percentage: 3.5 },
    { country: 'USA', audiences: 1927810, percentage: 1.2 },
    { country: 'Canada', audiences: 1301571, percentage: -4.7 },
    { country: 'Australia', audiences: 1127421, percentage: 3.9 }
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadCharts();
  }

  loadCharts(): void {
    new Chart("interestChart", {
      type: 'radar',
      data: {
        labels: ['Fashion', 'Technology', 'Cars', 'Memes', 'Cosmetics', 'Watches', 'Others'],
        datasets: [
          { label: 'TikTok', data: [40, 35, 30, 50, 28, 45, 38], borderColor: 'blue', fill: false },
          { label: 'Twitter', data: [20, 30, 50, 60, 33, 25, 20], borderColor: 'green', fill: false },
          { label: 'Facebook', data: [35, 40, 20, 25, 30, 28, 33], borderColor: 'orange', fill: false }
        ]
      }
    });

    new Chart("platformChart", {
      type: 'pie',
      data: {
        labels: ['Instagram', 'TikTok', 'Facebook'],
        datasets: [{
          data: [1108230, 608712, 370417],
          backgroundColor: ['#4CAF50', '#FFC107', '#2196F3']
        }]
      }
    });
  }
}
