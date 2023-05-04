import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserDetails } from '../shared/Modals/User';
import { BehaviorSubject, Observable,tap } from 'rxjs';
import { UserLogin } from '../shared/interfaces/UserLogin';
import { MatSnackBar } from '@angular/material/snack-bar';

const USER_KEY = 'UserInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<UserDetails>(this.getUserFromLocalStorage());
  public userObservable:Observable<UserDetails>;

  constructor(private http:HttpClient,private _snackBar: MatSnackBar) {
    this.userObservable = this.userSubject.asObservable()
   }

   public get currentUser():UserDetails{
    return this.userSubject.value;
  }

   login(userLogin:UserLogin):Observable<User>{
    return this.http.post<User>("http://68.178.164.213:9090/Employee/login",userLogin).pipe(
      tap({
        next:(user)=>{
          this.setUserToLocalStorage(user.employeeDto)
          this.userSubject.next(user.employeeDto);
          this._snackBar.open("Login Successfull", 'close',{
            duration:2000,
            panelClass:"my-custom-snackbar-success"
          });
        },
        error:(errorResponse)=>{
          console.log(errorResponse)
          this._snackBar.open("Login Failed", 'close',{
            duration:2000,
            panelClass:"my-custom-snackbar-failed"
          });
        }
      })
    )
   }

   logout(){
    this.userSubject.next(new UserDetails());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
    this._snackBar.open("Logout Successfull", 'close',{
      duration:2000,
      panelClass:"my-custom-snackbar-success"
    });
  }


   private setUserToLocalStorage(user:UserDetails){
    localStorage.setItem(USER_KEY,JSON.stringify(user))
  }

  private getUserFromLocalStorage():UserDetails{
    const userJson = localStorage.getItem(USER_KEY)
    if(userJson) return JSON.parse(userJson) as UserDetails
    return new UserDetails()
  }



}
