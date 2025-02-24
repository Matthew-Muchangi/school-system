import { Component, OnInit } from '@angular/core';

interface Subject {
  id: number;
  subjectName: string;
}

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  subjects: Subject[] = [];
  newSubject: Subject = { id: 0, subjectName: '' };
  idError = false;
  nameError = false;

  addSubject() {
    this.idError = !this.newSubject.id;
    this.nameError = !this.newSubject.subjectName.trim();

    if (this.idError || this.nameError) {
      return; // Stop if validation fails
    }

    this.subjects.push({ ...this.newSubject });
    this.newSubject = { id: 0, subjectName: '' }; // Reset form
  }

  removeSubject(index: number) {
    this.subjects.splice(index, 1);
  }
}

