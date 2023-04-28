import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../homeServices/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit{
  education:string[] = [
    'BCom',
    'BSC',
    'Btech',
    'MBA'
  ]

  emprole:string[] = [
    'HR',
    'Manager',
    'Employee'
  ]

  selectedFile: any = null;

  addEmpForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private empService:EmployeeService){}

  ngOnInit(): void {
    this.addEmpForm= this.formBuilder.group({
      empId:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      gender:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      dateOfBirth:['',Validators.required],
      qualification:['',Validators.required],
      empRole:['',Validators.required],
      mobileNumber:['',Validators.required],
      password:['',Validators.required],
      image:['']
    });
  }

  get f(){
    return this.addEmpForm.controls;
  }

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.addEmpForm.patchValue({
        image: this.selectedFile
      });
    }
  }


  addEmployee(){
    console.log(this.addEmpForm.value)
    if(this.addEmpForm.invalid) return;
    this.empService.addEmployeeSer(this.addEmpForm.value).subscribe((data)=>{
      console.log(data)
      this.addEmpForm.reset()
      Object.keys(this.addEmpForm.controls).forEach((key) => {
        const control = this.addEmpForm.controls[key];
        control.setErrors(null);
    });
    })
  }

}
