export interface AddEmployeeInterface{
    empId:string;
    firstName:string;
    lastName:string;
    gender:string;
    email:string;
    dateOfBirth:string;
    qualification:string;
    empRole:string;
    mobileNumber:number;
    password:string;
    designation:string;
    reportingManagerName:string;
    // image:string;
    currency:string;
    salary:string;
    bankName:string;
    accountHolderName:string;
    accountType:string;
    accountNumber:string;
    ifscCode:string;
    isActive:number;
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
