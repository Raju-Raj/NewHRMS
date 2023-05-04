import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  MatDialogRef } from '@angular/material/dialog';
import { AnnounementService } from '../../AnnouncementService/announement.service';

@Component({
  selector: 'app-add-announce-dialog',
  templateUrl: './add-announce-dialog.component.html',
  styleUrls: ['./add-announce-dialog.component.css']
})
export class AddAnnounceDialogComponent implements OnInit{

  addAnnouneForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private _dialogRef:MatDialogRef<AddAnnounceDialogComponent>,private annService:AnnounementService){}

  ngOnInit(): void {
    this.addAnnouneForm= this.formBuilder.group({
      subject:['',Validators.required],
      startdate:['',Validators.required],
      enddate:['',Validators.required],
      description:['',Validators.required],
    });
  }

  onFormSubmit(){
    console.log(this.addAnnouneForm.value)
    if(this.addAnnouneForm.invalid) return;
    this.annService.addAnnouncement(this.addAnnouneForm.value).subscribe((data)=>{
      this._dialogRef.close(true);
    });
  }

}
