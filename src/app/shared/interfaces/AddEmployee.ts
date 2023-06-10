export interface AddEmployeeInterface{
    empId:string;
    dateOfJoining:Date;
    dateOfBirth:string;
    reportingManagerId:number;
    employmentStatus:string;
    departmentId:number;
    jobtitle_id:string;
    position_id:string;
    designation:string;
    yearOfExp:number;
    prefix:string;
    WorkTelephoneNo:string;
    faxNo:string;
    empRoleId:number;
    firstName:string;
    lastName:string;
    gender:string;
    employeeName:string;
    email:string;
    contactnumber:string;
    modeOfEntry:string;
    extensionNo:number;
    // selectedDocumentsIds:string;
    selecteddate:Date;
    // profileImg:string;
    isactive:number;
    businessunitId:number;
    immManagerId:number;
    hrManagerId:number;
    ssnNumber:string;
    numberType:string;
    password:string;
}


export interface AddEmployeePersonalInterface{
    birthCountry:string;
    language:string;
    maritalStatus:string;
    citizenship:string;
    country:string;
    maritalEffectiveDate:string;
    citizenshipEffectiveDate:string;
    nationalIdType:string;
    nationalId:string;
  }

  export interface AddEmployeeContatInterface{
  status1:string;
	country1:string;
	state1:string;
	street1:string;
	effectiveDate1:string;
	pincode1:string;
	city1:string;
	status2:string;
	country2:string;
	state2:string;
	street2:string;
	effectiveDate2:string;
	pincode2:string;
	city2:string;
  }

  export interface AddEmployeeEducationInterface{
      masterDegree:string,
	    percentageofmasterDegree:number,
      bachlorsDegree:string,
	    percentageofbachlorsDegree:number,
	    diploma_HsscDegree:string,
	    percentageofdiploma_HsscDegree:number,
      sscDegree:string,
      percentageofsscDegree:number,
      other:string,
      percentageofother:number,
	    masterDegreeInstituteName:string,
      bachlorsDegreeInstituteName:string,
      diploma_HsscDegreeInstituteName:string,
      sscDegreeInstituteName:string,
      otherDegreeInstituteName:string,
  }
