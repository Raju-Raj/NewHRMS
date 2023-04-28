import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  hide = true;
  loginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,private authService:AuthService){
    authService.userObservable.subscribe((userDetails)=>{
      if(userDetails){
        router.navigate(['/home'])
      }
    })
  }

 ngOnInit(): void {
  this.loginForm= this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  });
 }


 get fc(){
  return this.loginForm.controls;
}


  authenticate(){
    if(this.loginForm.invalid) return;
     this.authService.login({email:this.fc['email'].value,password:this.fc['password'].value}).subscribe((data)=>{
        if(data){
          // this.router.navigate(['/home'])
          location.reload()
        }
     })
  }

}
