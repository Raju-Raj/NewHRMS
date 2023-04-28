import { Component,OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeService } from '../../homeServices/employee.service';

@Component({
  selector: 'app-emp-table',
  templateUrl: './emp-table.component.html',
  styleUrls: ['./emp-table.component.css']
})
export class EmpTableComponent implements OnInit{

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email','action'];
  dataSource!: MatTableDataSource<any>;

  constructor(private empService:EmployeeService){

  }

  ngOnInit(): void {
    this.empService.getEmployeeSer().subscribe(()=>{
      this.empService.employeesObservable.subscribe((data)=>{
        const limitData = data.slice(Math.max(data.length - 5, 1))
        const reverseData = limitData.reverse()
        this.dataSource = new MatTableDataSource(reverseData)
        // console.log(reverseData)
      })
    })

  }

}
