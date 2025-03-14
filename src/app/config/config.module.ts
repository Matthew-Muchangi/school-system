import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConfigRoutingModule } from './config-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { GradesComponent } from './grades/grades.component';
import { ClassesComponent } from './classes/classes.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { ConfigLayoutComponent } from './config-layout/config-layout.component';
import { StreamsComponent } from './streams/streams.component';
import { HttpClientModule} from '@angular/common/http';


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
    ConfigRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ], 
  exports: [
    SidebarComponent,
    DashboardComponent
  ]
})
export class ConfigModule { }
