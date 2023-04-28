import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AnnouncementModal } from 'src/app/shared/Modals/Announcement';
import { AnnouncementInterface } from 'src/app/shared/interfaces/AnnouncementInterface';

@Injectable({
  providedIn: 'root'
})
export class AnnounementService {

  private announcementSubject = new BehaviorSubject<AnnouncementModal[]>([new AnnouncementModal]);
  public announcementObservable:Observable<AnnouncementModal[]>;

  constructor(private http:HttpClient) {
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


}
