import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../homeServices/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-all-employee-details',
  templateUrl: './all-employee-details.component.html',
  styleUrls: ['./all-employee-details.component.css']
})
export class AllEmployeeDetailsComponent implements OnInit{

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private empService:EmployeeService){

  }



  ngOnInit(): void {
    this.empService.getEmployeeSer().subscribe(()=>{
      this.empService.employeesObservable.subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        // console.log(data)
      })
    })

}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}
