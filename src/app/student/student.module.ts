import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { RouterModule } from '@angular/router';
import { ConfigModule } from "../config/config.module";




@NgModule({
  declarations: [
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ConfigModule
]
})
export class StudentModule { }
