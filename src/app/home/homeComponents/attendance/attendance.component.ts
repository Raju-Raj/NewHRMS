import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { UserDetails } from 'src/app/shared/Modals/User';
import { AttendanceService } from '../../homeServices/attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  attenForm!:FormGroup;
  user!:UserDetails;
  isHolidayToday=false;

    hours !:number;
    minutes !:string;
    seconds !:string;
    ampm !:string;
    day !:string;
    month !:string;
    year !:string;
    dayString!:string;
    monthString!:string;


  constructor(private formBuilder:FormBuilder,private authService:AuthService, private attService:AttendanceService){
    authService.userObservable.subscribe((userDetails)=>{
      this.user = userDetails;
    })
  }

  onChange(event:any){
    this.isHolidayToday = event.checked ? true : false;
    console.log(this.isHolidayToday)
 }

  ngOnInit(): void {
    this.attenForm= this.formBuilder.group({
      workFrom:['',Validators.required]
    });

    setInterval(() => {
      const date = new Date();
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      this.hours = date.getHours() % 12 || 12; // convert to 12-hour format
      this.minutes = date.getMinutes().toString().padStart(2, '0');
      this.seconds = date.getSeconds().toString().padStart(2, '0');
      this.ampm = date.getHours() < 12 ? 'AM' : 'PM';
      this.day = date.getDate().toString().padStart(2, '0');
      this.month = (date.getMonth() + 1).toString().padStart(2, '0'); // add 1 because getMonth() is zero-based
      this.year = date.getFullYear().toString();
      this.dayString =  daysOfWeek[date.getDay()];
      this.monthString = monthsOfYear[date.getMonth()];
    }, 1000);

  }

checkIn(){
  if(!this.attenForm.valid) return
  this.attService.checkIn(this.isHolidayToday,this.user.empId,this.attenForm.value).subscribe(()=>{
  })
}


checkOut(){
  this.attService.checkOut(this.user.empId).subscribe(()=>{
  })
}



}
