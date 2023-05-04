import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserDetails } from 'src/app/shared/Modals/User';
import { AddEmployeeInterface } from 'src/app/shared/interfaces/AddEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesSubject = new BehaviorSubject<UserDetails[]>([new UserDetails]);
  public employeesObservable:Observable<UserDetails[]>;

  private singleEmployeeSubject = new BehaviorSubject<UserDetails>(new UserDetails);
  public singleEmployeeObservable:Observable<UserDetails>


  constructor(private http:HttpClient,private _snackBar: MatSnackBar) {
    this.employeesObservable = this.employeesSubject.asObservable()
    this.singleEmployeeObservable = this.singleEmployeeSubject.asObservable()
   }


  getEmployeeSer():Observable<UserDetails[]>{
    return this.http.get<UserDetails[]>("http://68.178.164.213:9090/Employee/getEmployeeDetails").pipe(
      tap({
        next:(emp)=>{
          this.employeesSubject.next(emp);
        },
        error:(errorResponse)=>{
          console.log(errorResponse)
        }
      })
    )
  }

  getSingleEmployeeSer(id:string):Observable<UserDetails>{
    return this.http.get<UserDetails>(`http://68.178.164.213:9090/Employee/getEmployeeDetail/${id}`).pipe(
      tap({
        next:(emp)=>{
          this.singleEmployeeSubject.next(emp)
        },
        error:(errorResponse)=>{
          console.log(errorResponse)
        }
      })
    )
  }


  addEmployeeSer(empPayload:AddEmployeeInterface){
    console.log(empPayload)
    return this.http.post("http://68.178.164.213:9090/Employee/saveEmployee",empPayload).pipe(
      tap({
        next:(user)=>{
          this.getEmployeeSer()
          this._snackBar.open("Employee Added Successfull", 'close',{
            duration:2000,
            panelClass:"my-custom-snackbar-success"
          });
        },
        error:(errorResponse)=>{
          console.log(errorResponse)
          this._snackBar.open("Employee Added Failed", 'close',{
            duration:2000,
            panelClass:"my-custom-snackbar-failed"
          });
        }
      })
    )
  }

}
