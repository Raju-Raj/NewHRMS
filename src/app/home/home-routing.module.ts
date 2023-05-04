import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DasboardPageComponent } from './homeComponents/dasboard-page/dasboard-page.component';
import { AuthGuard } from '../auth.guard';
import { AddemployeeComponent } from './homeComponents/addemployee/addemployee.component';
import { ProfilePageComponent } from './homeComponents/profile-page/profile-page.component';
import { AllEmployeeDetailsComponent } from './homeComponents/all-employee-details/all-employee-details.component';
import { GetSingleEmployeeComponent } from './homeComponents/get-single-employee/get-single-employee.component';
import { AnnouncementPageComponent } from './homeComponents/announcement-page/announcement-page.component';
import { AttendanceComponent } from './homeComponents/attendance/attendance.component';
import { AttendanceReportComponent } from './homeComponents/attendance-report/attendance-report.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'',
        component:DasboardPageComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'addEmployee',
        component:AddemployeeComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'profile',
        component:ProfilePageComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'allemployees',
        component:AllEmployeeDetailsComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'singleEmployee/:id',
        component:GetSingleEmployeeComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'announcements',
        component:AnnouncementPageComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'attendance',
        component:AttendanceComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'attendanceReport/:id',
        component:AttendanceReportComponent,
        canActivate:[AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
