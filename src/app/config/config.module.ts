import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConfigRoutingModule } from './config-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { StreamsComponent } from './streams/streams.component';
import { GradesComponent } from './grades/grades.component';
import { ClassesComponent } from './classes/classes.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { ConfigLayoutComponent } from './config-layout/config-layout.component';


@NgModule({
  declarations: [
   DashboardComponent,
   SubjectsComponent,
   StreamsComponent,
   GradesComponent,
   ClassesComponent,
   SidebarComponent,
   ConfigLayoutComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ConfigRoutingModule
  ], 
  exports: [
    SidebarComponent
  ]
})
export class ConfigModule { }
