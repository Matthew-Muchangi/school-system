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
  subjects: any[] = []; // Store subjects ✅

  constructor(
    private configService: ConfigService,
    private studentService: StudentService, 
    private fb: FormBuilder
  ) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      schoolClass: ['', Validators.required],
      stream: ['', Validators.required],
      subjects: ['', Validators.required], // ✅ Ensure subjects field is added
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
    this.loadSubjects(); // ✅ Load subjects
  }

  // ✅ Load classes from backend
  loadClasses(): void {
    this.configService.getClasses().subscribe(
      (data) => {
        this.classes = data; 
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
        this.streams = data; 
      },
      (error) => {
        console.error('Error fetching streams:', error);
      }
    );
  }

  // ✅ Load subjects from backend
  loadSubjects(): void {
    this.configService.getSubjects().subscribe(
      (data) => {
        this.subjects = data;
      },
      (error) => {
        console.error('Error fetching subjects:', error);
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
