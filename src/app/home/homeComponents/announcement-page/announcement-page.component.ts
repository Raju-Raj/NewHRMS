import { Component } from '@angular/core';
import { AnnounementService } from '../../AnnouncementService/announement.service';
import { AnnouncementModal } from 'src/app/shared/Modals/Announcement';

@Component({
  selector: 'app-announcement-page',
  templateUrl: './announcement-page.component.html',
  styleUrls: ['./announcement-page.component.css']
})
export class AnnouncementPageComponent {
  announcements!:AnnouncementModal[];

  constructor(private annService:AnnounementService){
    this.annService.getAnnouncements().subscribe(()=>{
      this.annService.announcementObservable.subscribe((ann)=>{
        this.announcements = ann
      })
    })
  }

}
