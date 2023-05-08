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

  BasicDetailsEmpForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private empService:EmployeeService){}

  ngOnInit(): void {
    this.BasicDetailsEmpForm= this.formBuilder.group({
      empId:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      gender:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      dateOfBirth:['',Validators.required],
      qualification:['',Validators.required],
      empRole:['',Validators.required],
      designation:['',Validators.required],
      reportingManagerName:['',Validators.required],
      mobileNumber:['',Validators.required],
      password:['',Validators.required],
      // image:['']
    });
  }

  get f(){
    return this.BasicDetailsEmpForm.controls;
  }

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.BasicDetailsEmpForm.patchValue({
        image: this.selectedFile
      });
    }
  }


  addEmployeeBasicDetails(){
    console.log(this.BasicDetailsEmpForm.value)
    if(this.BasicDetailsEmpForm.invalid) return;
    this.empService.addEmployeeSer(this.BasicDetailsEmpForm.value).subscribe((data)=>{
      console.log(data)
      this.BasicDetailsEmpForm.reset()
      Object.keys(this.BasicDetailsEmpForm.controls).forEach((key) => {
        const control = this.BasicDetailsEmpForm.controls[key];
        control.setErrors(null);
    });
    })
  }

}
