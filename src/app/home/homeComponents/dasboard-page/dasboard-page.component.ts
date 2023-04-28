import { Component,Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserDetails } from 'src/app/shared/Modals/User';
import { EmployeeService } from '../../homeServices/employee.service';

@Component({
  selector: 'app-dasboard-page',
  templateUrl: './dasboard-page.component.html',
  styleUrls: ['./dasboard-page.component.css']
})
export class DasboardPageComponent {
  user!:UserDetails
  @Input() navclass:any;
  employees!:UserDetails[]
  employeeLength!:number

  constructor(private authService:AuthService,private empService:EmployeeService){
    authService.userObservable.subscribe((userDetails)=>{
      this.user = userDetails;
    })
  }


  ngOnInit(): void {
    this.empService.getEmployeeSer().subscribe(()=>{
      this.empService.employeesObservable.subscribe((data)=>{
        this.employees=data
        this.employeeLength=data.length
      })
    })

  }

}
