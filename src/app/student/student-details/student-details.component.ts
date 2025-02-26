import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  studentForm: FormGroup;
  successMessage: string = '';
  classes: any[] = []; // Store classes
  streams: any[] = []; // Store streams

  constructor(
    private configService: ConfigService,
    private studentService: StudentService, // ✅ Correctly inject StudentService
    private fb: FormBuilder
  ) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      schoolClass: ['', Validators.required],
      stream: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        country: [''],
        postalCode: ['']
      })
    });
  }

  ngOnInit(): void {
    this.loadClasses();
    this.loadStreams();
  }

  // ✅ Load classes from backend
  loadClasses(): void {
    this.configService.getClasses().subscribe(
      (data) => {
        this.classes = data; // Ensure data is an array of class names/objects
      },
      (error) => {
        console.error('Error fetching classes:', error);
      }
    );
  }

  // ✅ Load streams from backend
  loadStreams(): void {
    this.configService.getStreams().subscribe(
      (data) => {
        this.streams = data; // Ensure data is an array of stream names/objects
      },
      (error) => {
        console.error('Error fetching streams:', error);
      }
    );
  }

  // ✅ Add Student Function
  addStudent() {
    if (this.studentForm.valid) {
      this.studentService.addStudent(this.studentForm.value).subscribe(
        (response) => {
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
