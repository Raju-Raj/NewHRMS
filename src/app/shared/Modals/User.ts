export class UserDetails{
  id!:number;
  empId!:string;
  firstName!:string;
  lastName!:string;
  dateOfBirth!:string;
  empRole!:string;
  qualification!:string;
  mobileNumber!:number;
  email!:string;
  gender!:string;
}

export class User{
  msg!:string;
  status!:boolean;
  employeeDto!:UserDetails;
}

