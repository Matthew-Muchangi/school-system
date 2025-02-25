import { Component, OnInit } from '@angular/core';
import { ConfigService, Subject } from 'src/app/services/config.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects: Subject[] = [];

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.loadSubjects();
  }

  loadSubjects() {
    this.configService.getSubjects().subscribe(
      (data) => {
        this.subjects = data;
      },
      (error) => {
        console.error('Error fetching subjects:', error);
      }
    );
  }
}
