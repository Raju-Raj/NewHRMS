import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../homeServices/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit{

  addEmpMoreDetailsId!:string;

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
  PersonalDetailsEmpForm!:FormGroup;
  ContactDetailsEmpForm!:FormGroup;
  EducationDetailsEmpForm!:FormGroup;

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
      // image:[''],
      currency:['',Validators.required],
      salary:['',Validators.required],
      bankName:['',Validators.required],
      accountHolderName:['',Validators.required],
      accountType:['',Validators.required],
      accountNumber:['',Validators.required],
      ifscCode:['',Validators.required],
      isActive:['',Validators.required],
    });
    this.PersonalDetailsEmpForm = this.formBuilder.group({
      birthCountry:['',Validators.required],
      language:['',Validators.required],
      maritalStatus:['',Validators.required],
      citizenship:['',Validators.required],
      country:['',Validators.required],
      maritalEffectiveDate:['',Validators.required],
      citizenshipEffectiveDate:['',Validators.required],
      nationalIdType:['',Validators.required],
      nationalId:['',Validators.required],
    })
    this.ContactDetailsEmpForm = this.formBuilder.group({
      status1:['',Validators.required],
      country1:['',Validators.required],
      state1:['',Validators.required],
      street1:['',Validators.required],
      effectiveDate1:['',Validators.required],
      pincode1:['',Validators.required],
      city1:['',Validators.required],
      status2:['',Validators.required],
      country2:['',Validators.required],
      state2:['',Validators.required],
      street2:['',Validators.required],
      effectiveDate2:['',Validators.required],
      pincode2:['',Validators.required],
      city2:['',Validators.required],
    })
    this.EducationDetailsEmpForm = this.formBuilder.group({
	    masterDegree:['',Validators.required],
	    percentageofmasterDegree:['',Validators.required],
      bachlorsDegree:['',Validators.required],
	    percentageofbachlorsDegree:['',Validators.required],
	    diploma_HsscDegree:['',Validators.required],
	    percentageofdiploma_HsscDegree:['',Validators.required],
      sscDegree:['',Validators.required],
      percentageofsscDegree:['',Validators.required],
      other:['',Validators.required],
      percentageofother:['',Validators.required],
	    masterDegreeInstituteName:['',Validators.required],
      bachlorsDegreeInstituteName:['',Validators.required],
      diploma_HsscDegreeInstituteName:['',Validators.required],
      sscDegreeInstituteName:['',Validators.required],
      otherDegreeInstituteName:['',Validators.required],
    })

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

  addEmployeePersonalDetails(){
    console.log(this.PersonalDetailsEmpForm.value)
    if(this.PersonalDetailsEmpForm.invalid) return;
  }

  addEmployeeContactDetails(){
    console.log(this.ContactDetailsEmpForm.value)
    if(this.ContactDetailsEmpForm.invalid) return;
  }

  addEmployeeEducationDetails(){
    console.log(this.EducationDetailsEmpForm.value)
    if(this.EducationDetailsEmpForm.invalid) return;
  }

}
