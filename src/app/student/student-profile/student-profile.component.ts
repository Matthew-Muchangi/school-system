import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Subject } from 'src/app/services/config.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit, AfterViewInit {

  student: any = {}; 
 subjects: Subject[] = [];
  isLoading: boolean = true; 
  errorMessage: string = '';


  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadStudentProfile();
  }

  ngAfterViewInit(): void {
    
  }

  // ✅ Fetch Student Data
  loadStudentProfile(): void {
    const admissionNumber = this.route.snapshot.paramMap.get('admissionNumber'); 
    if (admissionNumber) {
      this.studentService.getStudentbyadmissionNumber(admissionNumber).subscribe(
        (data) => {
          if (data) {
            this.student = data;
          
            
          } else {
            this.errorMessage = "Student data not found.";
          }
          this.isLoading = false; 
        },
        
      );
    }
  }

  loadSubjects(): void {
    const admissionNumber = this.route.snapshot.paramMap.get('admissionNumber'); 
    if (admissionNumber) {
      this.studentService.getSubjects(admissionNumber).subscribe(
        (data) => {
          if (data) {
            this.student = data;
          
            
          } else {
            this.errorMessage = "Student data not found.";
          }
          this.isLoading = false; 
        },
        
      );
    }
  }

  

  
}

