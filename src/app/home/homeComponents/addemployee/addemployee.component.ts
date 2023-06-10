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

  selectedFile: any = null;

  // Form select option for SSN number
  ssn = true;
  aadhar = false;
  pan = false;

  // Form Option Values
  jobTitleValues:any;
  jobPositions:any;
  role:any;
  businessUnit:any;
  departments:any;
  hrManagerList:any;
  ImmManagerList:any;
  reportingManagerList:any;


  // Form Names
  BasicDetailsEmpForm!:FormGroup;
  SalaryDetailsEmpForm!:FormGroup;
  PersonalDetailsEmpForm!:FormGroup;
  ContactDetailsEmpForm!:FormGroup;
  EducationDetailsEmpForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private empService:EmployeeService){
    this.getJobTitle()
    this.getRole()
    this.getBusinessUnit()
  }

  typeOfNumberSSN(name:any){
    this.BasicDetailsEmpForm.controls['ssnNumber'].setValue('')
    if (name == 'pancard') {
      this.ssn = false;
      this.aadhar = false;
      this.pan = true;
  } else if (name == 'aadharcard') {
      this.ssn = false;
      this.pan = false;
      this.aadhar = true;
  } else {
      this.ssn = true;
      this.pan = false;
      this.aadhar = false;
  }
  }


  // Basic Details Form Select List Api's
  getJobTitle(){
    this.empService.getJobTitleSer().subscribe((data:any)=>{
      this.jobTitleValues = data;
    })
  }

  getJobPosition(id:any){
    this.empService.getJobPositionSer(id).subscribe((data:any)=>{
      this.jobPositions = data.listOfPositions;
    })
    console.log("called")
  }

  getRole(){
    this.empService.getRoleSer().subscribe((data:any)=>{
      this.role = data;
    })
  }

  getBusinessUnit(){
    this.empService.getBusinessUnitSer().subscribe((data:any)=>{
      this.businessUnit = data;
    })
  }

  getDepartment(id:any){
    this.empService.getDepartmentSer(id).subscribe((data:any)=>{
      this.departments = data.list;
    })
    this. getHrmangerList(id)
    this.getImmManagerList(id)
  }

  getHrmangerList(id:any){
    this.empService.getHrManagerListSer(id).subscribe((data:any)=>{
      this.hrManagerList = data.list
    })
  }

  getImmManagerList(id:any){
    this.empService.getImmManagerListSer(id).subscribe((data:any)=>{
      this.ImmManagerList = data.list
    })
  }

  getReportingManager(id:any){
    console.log(this.BasicDetailsEmpForm.controls['empRoleId'].value)
    this.empService.getReportingManagerSer(this.BasicDetailsEmpForm.controls['empRoleId'].value,id).subscribe((data:any)=>{
      this.reportingManagerList = data.list
    })
  }


  ngOnInit(): void {
    this.BasicDetailsEmpForm= this.formBuilder.group({
      empId:['',Validators.required],
      prefix:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      employeeName:['',Validators.required],
      gender:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      contactnumber:['',Validators.required],
      password:['',Validators.required],
      dateOfBirth:['',Validators.required],
      jobtitle_id:['',Validators.required],
      position_id:['',Validators.required],
      empRoleId:['',Validators.required],
      selecteddate:['',Validators.required],
      businessunitId:['',Validators.required],
      departmentId:['',Validators.required],
      modeOfEntry:['',Validators.required],
      dateOfJoining:['',Validators.required],
      yearOfExp:['',Validators.required],
      WorkTelephoneNo:['',Validators.required],
      extensionNo:['',Validators.required],
      faxNo:['',Validators.required],
      designation:['',Validators.required],
      hrManagerId:['',Validators.required],
      immManagerId:['',Validators.required],
      reportingManagerId:['',Validators.required],
      numberType:['',Validators.required],
      ssnNumber:['',Validators.required],
      // profileImg:[''],
      isactive:['',Validators.required],
    });
    this.SalaryDetailsEmpForm = this.formBuilder.group({

    })
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
