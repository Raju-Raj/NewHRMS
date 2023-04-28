import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './homeComponents/sidebar/sidebar.component';
import { DasboardPageComponent } from './homeComponents/dasboard-page/dasboard-page.component';
import { EmpTableComponent } from './homeComponents/emp-table/emp-table.component';
import { RightbarComponent } from './homeComponents/rightbar/rightbar.component';
// Material Modules
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import { AddemployeeComponent } from './homeComponents/addemployee/addemployee.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { WelcomeMsgComponent } from '../partials/welcome-msg/welcome-msg.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePageComponent } from './homeComponents/profile-page/profile-page.component';
import { AllEmployeeDetailsComponent } from './homeComponents/all-employee-details/all-employee-details.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GetSingleEmployeeComponent } from './homeComponents/get-single-employee/get-single-employee.component';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    DasboardPageComponent,
    EmpTableComponent,
    RightbarComponent,
    AddemployeeComponent,
    WelcomeMsgComponent,
    ProfilePageComponent,
    AllEmployeeDetailsComponent,
    GetSingleEmployeeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatBadgeModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
  ],
  providers:[]
})
export class HomeModule { }
