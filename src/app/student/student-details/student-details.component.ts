import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from '../../services/student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  studentForm: FormGroup;
  successMessage: string = '';

  constructor(private studentService: StudentService, private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      schoolClass: [, Validators.required],
      stream: [, Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        country: [''],
        postalCode: [''],
        subjectName: ['']
      })
    });
  }

  ngOnInit(): void {}

  addStudent() {
    if (this.studentForm.valid) {
      const studentData: Student = this.studentForm.value;
      this.studentService.addStudent(studentData).subscribe(
        () => {
          this.successMessage = 'Student added successfully!';
          this.studentForm.reset();
        },
        (error) => {
          console.error('Error adding student:', error);
        }
      );
    }
  }
}
