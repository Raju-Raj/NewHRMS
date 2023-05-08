import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AnnouncementModal } from 'src/app/shared/Modals/Announcement';
import { AnnouncementInterface } from 'src/app/shared/interfaces/AnnouncementInterface';

@Injectable({
  providedIn: 'root'
})
export class AnnounementService {

  private announcementSubject = new BehaviorSubject<AnnouncementModal[]>([new AnnouncementModal]);
  public announcementObservable:Observable<AnnouncementModal[]>;

  constructor(private http:HttpClient,private _snackBar: MatSnackBar) {
    this.announcementObservable=this.announcementSubject.asObservable()
   }

getAnnouncements():Observable<AnnouncementModal[]>{
  return this.http.get<AnnouncementModal[]>("http://68.178.164.213:9090/announcement/getAnnouncements").pipe(
    tap({
      next:(ann)=>{
        this.announcementSubject.next(ann);
      },
      error:(errorResponse)=>{
        console.log(errorResponse)
      }
    })
  )
}

addAnnouncement(payload:AnnouncementInterface){
  return this.http.post("http://68.178.164.213:9090/announcement/saveAnnouncemetdetails",payload).pipe(
    tap({
      next:(res)=>{
        this._snackBar.open("Add Announcement Successfull", 'close',{
          duration:2000,
          panelClass:"my-custom-snackbar-success"
        });
        this.getAnnouncements()
      },
      error:(err)=>{
        this._snackBar.open("Add Announcement Failed", 'close',{
          duration:2000,
          panelClass:"my-custom-snackbar-failed"
        });
      }
    })
  )
}


}
