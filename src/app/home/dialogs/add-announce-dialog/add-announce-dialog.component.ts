import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AnnounementService } from '../../AnnouncementService/announement.service';

@Component({
  selector: 'app-add-announce-dialog',
  templateUrl: './add-announce-dialog.component.html',
  styleUrls: ['./add-announce-dialog.component.css']
})
export class AddAnnounceDialogComponent implements OnInit{

  addAnnouneForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private _dialogRef:MatDialogRef<AddAnnounceDialogComponent>,private annService:AnnounementService,@Inject(MAT_DIALOG_DATA) public data:any){}

  ngOnInit(): void {
    this.addAnnouneForm= this.formBuilder.group({
      subject:['',Validators.required],
      startdate:['',Validators.required],
      enddate:['',Validators.required],
      description:['',Validators.required],
    });
    this.addAnnouneForm.patchValue(this.data)
  }



  onFormSubmit(){
    console.log(this.addAnnouneForm.value)
    if(this.addAnnouneForm.invalid) return;
    if(this.data){
      const startDateCreate = this.addAnnouneForm.value.startdate ? new Date(this.addAnnouneForm.value.startdate) : new Date()
      const getStartYear = startDateCreate?.getFullYear()
      const getStartMonth = (startDateCreate?.getMonth()+1).toString().padStart(2, '0');
      const getStartDay = startDateCreate?.getDate().toString().padStart(2, '0');
      const startDate = getStartYear+'-'+getStartMonth+'-'+getStartDay
      this.addAnnouneForm.patchValue({
        startdate:startDate
      })
    const endDateCreate = this.addAnnouneForm.value.enddate ? new Date(this.addAnnouneForm.value.enddate) : new Date()
    const getEndYear = endDateCreate?.getFullYear()
    const getEndMonth = (endDateCreate?.getMonth()+1).toString().padStart(2, '0');
    const getEndDay = endDateCreate?.getDate().toString().padStart(2, '0');
    const endDate = getEndYear+'-'+getEndMonth+'-'+getEndDay
    this.addAnnouneForm.patchValue({
      enddate:endDate
    })

    this.annService.updateAnnouncement(this.data.announid,this.addAnnouneForm.value).subscribe(()=>{
      this._dialogRef.close(true);
    })


    }else{
      const startDateCreate = this.addAnnouneForm.value.startdate ? new Date(this.addAnnouneForm.value.startdate) : new Date()
    const getStartYear = startDateCreate?.getFullYear()
    const getStartMonth = (startDateCreate?.getMonth()+1).toString().padStart(2, '0');
    const getStartDay = startDateCreate?.getDate().toString().padStart(2, '0');
    const startDate = getStartYear+'-'+getStartMonth+'-'+getStartDay
    this.addAnnouneForm.patchValue({
      startdate:startDate
    })
  const endDateCreate = this.addAnnouneForm.value.enddate ? new Date(this.addAnnouneForm.value.enddate) : new Date()
  const getEndYear = endDateCreate?.getFullYear()
  const getEndMonth = (endDateCreate?.getMonth()+1).toString().padStart(2, '0');
  const getEndDay = endDateCreate?.getDate().toString().padStart(2, '0');
  const endDate = getEndYear+'-'+getEndMonth+'-'+getEndDay
  this.addAnnouneForm.patchValue({
    enddate:endDate
  })
   this.annService.addAnnouncement(this.addAnnouneForm.value).subscribe((data)=>{
     this._dialogRef.close(true);
  });
   }

  }

  }

