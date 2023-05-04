import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable,tap } from 'rxjs';
import { AttendanceReports } from 'src/app/shared/Modals/AttendanceReports';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private AttendanceReportSubject = new BehaviorSubject<AttendanceReports[]>([new AttendanceReports]);
  public AttendanceReportObservable:Observable<AttendanceReports[]>;



  constructor(private http:HttpClient,private _snackBar: MatSnackBar) {
    this.AttendanceReportObservable = this.AttendanceReportSubject.asObservable()
   }

  checkIn(id:string,payload:{workFrom:string}){
    return this.http.post(`http://68.178.164.213:9090/attendance/check-in/${id}`,payload).pipe(
      tap({
        next:(res:any)=>{
          this._snackBar.open(res.msg, 'close',{
            duration:2000,
            panelClass:"my-custom-snackbar-success"
          });
        },
        error:(errorResponse)=>{
          this._snackBar.open(errorResponse.error, 'close',{
            duration:2000,
            panelClass:"my-custom-snackbar-failed"
          });
        }
      })
    )
  }

  checkOut(id:string){
    return this.http.post(`http://68.178.164.213:9090/attendance/check-out/${id}`,{}).pipe(
      tap({
        next:(res:any)=>{
          this._snackBar.open(res.msg, 'close',{
            duration:2000,
            panelClass:"my-custom-snackbar-success"
          });
        },
        error:(errorResponse)=>{
          console.log(errorResponse)
          this._snackBar.open("CheckOut Failed", 'close',{
            duration:2000,
            panelClass:"my-custom-snackbar-failed"
          });
        }
      })
    )
  }

  getReport(id:any,startDate:any,endDate:any){
    return this.http.get<AttendanceReports[]>(`http://68.178.164.213:9090/attendance/employee/weekly/${id}?startDate=${startDate}&endDate=${endDate}`).pipe(
      tap({
        next:(reports)=>{
          this.AttendanceReportSubject.next(reports);
          this._snackBar.open("Report Fetched Success", 'close',{
            duration:2000,
            panelClass:"my-custom-snackbar-success"
          });
        },
        error:(errorResponse)=>{
          console.log(errorResponse)
          this._snackBar.open("Report Fetched Failed", 'close',{
            duration:2000,
            panelClass:"my-custom-snackbar-failed"
          });
        }
      })
    )
  }

}
