import { Component,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AttendanceService } from '../../homeServices/attendance.service';
import { AttendanceReports } from 'src/app/shared/Modals/AttendanceReports';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.css']
})
export class AttendanceReportComponent {

  displayedColumns: string[] = ['empId', 'ipAddress','workFrom' ,'checkInTime', 'checkOutTime','date','status'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  empReportId!:string;
  reports !:AttendanceReports[];

  constructor(activatedRoute:ActivatedRoute,private attendanceService:AttendanceService){
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        this.empReportId = params['id']
      }
    })
  }

  dateRange = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


getReport(){
  const startDateCreate = this.dateRange.value.start ? new Date(this.dateRange.value.start) : new Date()
  const getStartYear = startDateCreate?.getFullYear()
  const getStartMonth = (startDateCreate?.getMonth()+1).toString().padStart(2, '0');
  const getStartDay = startDateCreate?.getDate().toString().padStart(2, '0');
  const startDate = getStartYear+'-'+getStartMonth+'-'+getStartDay
  console.log(startDate)
  const endDateCreate = this.dateRange.value.end ? new Date(this.dateRange.value.end) : new Date()
  const getEndYear = endDateCreate?.getFullYear()
  const getEndMonth = (endDateCreate?.getMonth()+1).toString().padStart(2, '0');
  const getEndDay = endDateCreate?.getDate().toString().padStart(2, '0');
  const endDate = getEndYear+'-'+getEndMonth+'-'+getEndDay
  console.log(endDate)

  this.attendanceService.getReport(this.empReportId,startDate,endDate).subscribe(()=>{
    this.attendanceService.AttendanceReportObservable.subscribe((reports)=>{
      this.reports = reports;
      this.dataSource = new MatTableDataSource(reports);
      this.dataSource.paginator = this.paginator;
    })
  })

}
}
