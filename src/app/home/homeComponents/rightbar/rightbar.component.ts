import { Component,Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AnnounementService } from '../../AnnouncementService/announement.service';
import { AnnouncementModal } from 'src/app/shared/Modals/Announcement';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.css']
})
export class RightbarComponent {
  @Input() navclass:any;
  announcements!:AnnouncementModal[];
  newAnnouncement!:AnnouncementModal[];

  constructor(private userService:AuthService, private annService:AnnounementService){
    this.annService.getAnnouncements().subscribe((ann)=>{
      this.announcements = ann
      this.newAnnouncement = this.announcements.slice(this.announcements.length-1)
      console.log(this.newAnnouncement)
    })
  }

  logoutFunction(){
    this.userService.logout()
  }
}
