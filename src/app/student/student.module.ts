import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { RouterModule } from '@angular/router';
import { ConfigModule } from "../config/config.module";
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AppRoutingModule } from './student-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentDetailsComponent,
    StudentDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ConfigModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
]
})
export class StudentModule { }
