import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentComponent } from './department/department.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { LibraryComponent } from './library/library.component';
import { ProfessorComponent } from './professor/professor.component';
import { StaffComponent } from './staff/staff.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'event-management',component:EventManagementComponent},
  {path:'courses',component:CoursesComponent},
  {path:'department',component:DepartmentComponent},
  {path:'library',component:LibraryComponent},
  {path:'professor',component:ProfessorComponent},
  {path:'staff',component:StaffComponent},
  {path:'student',component:StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
