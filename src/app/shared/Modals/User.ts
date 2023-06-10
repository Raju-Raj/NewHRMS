// export class UserDetails{
//   id!:number;
//   empId!:string;
//   firstName!:string;
//   lastName!:string;
//   dateOfBirth!:string;
//   empRole!:string;
//   qualification!:string;
//   mobileNumber!:number;
//   email!:string;
//   gender!:string;
// }


export class UserDetails{
  id!:string;
  empId!:string;
  userId!:number;
  dateOfJoining!:Date;
  dateOfleaving!:Date;
  reportingManagerId!:number;
  reportingManager!:string;
  emp_status_id!:string;
  employmentStatus!:string;
  gender!:string;
  businessunitName!:string;
  departmentId!:number;
  departmentName!:string;
  jobtitle_id!:string;
  jobTitleName!:string;
  position_id!:string;
  designation!:string;
  yearOfExp!:number;
  holiday_group!:string;
  holiday_group_name!:string;
  prefix_id!:string;
  prefix!:string;
  extensionNo!:number;
  faxNo!:string;
  empRoleId!:number;
  empRole!:string;
  firstName!:string;
  lastName!:string;
  employeeName!:string;
  email!:string;
  contactnumber!:string;
  backgroundchk_status!:string;
  employeeId!:string;
  modeOfEntry!:string;
  visaId!:number;
  selectedDocumentsIds!:string;
  other_modeofentry!:string;
  selecteddate!:Date;
  candidatereferredby!:string;
  referer_name!:string;
  profileImg!:string;
  signature!:string;
  createdby!:number;
  createdby_name!:string;
  modifiedBy!:number;
  modifieddate!:Date
  createddate!:Date;
  isactive!:number;
  businessunitId!:number;
  immManagerId!:number;
  hrManagerId!:number;
  immManagerName!:string;
  hrManagerName!:string;
  employeeStatus!:string;
  ssnNumber!:string;
  numberType!:string;
  workTelephoneNo!:string;
  jwtToken!:string;
}



export class User{
  msg!:string;
  status!:boolean;
  employeeDto!:UserDetails;
}

