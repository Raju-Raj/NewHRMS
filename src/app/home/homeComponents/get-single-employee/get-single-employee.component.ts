import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../homeServices/employee.service';
import { UserDetails } from 'src/app/shared/Modals/User';

@Component({
  selector: 'app-get-single-employee',
  templateUrl: './get-single-employee.component.html',
  styleUrls: ['./get-single-employee.component.css']
})
export class GetSingleEmployeeComponent {

  singleEmployee!:UserDetails;

  constructor(activatedRoute:ActivatedRoute, private empService:EmployeeService){
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      empService.getSingleEmployeeSer(params['id']).subscribe((singleEmp) => {
        this.singleEmployee = singleEmp;
        // console.log(this.singleEmployee)
      });
    })
  }

}
