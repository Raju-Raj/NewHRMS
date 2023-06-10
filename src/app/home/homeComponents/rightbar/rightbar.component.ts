import { Component,Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AnnounementService } from '../../AnnouncementService/announement.service';
import { AnnouncementModal } from 'src/app/shared/Modals/Announcement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.css']
})
export class RightbarComponent {
  @Input() navclass:any;
  announcements!:AnnouncementModal[];
  newAnnouncement!:AnnouncementModal[];
  newThreeAnnouncements!:AnnouncementModal[];

  constructor(private userService:AuthService, private annService:AnnounementService,private router:Router){
    this.annService.getAnnouncements().subscribe(()=>{
      this.annService.announcementObservable.subscribe((ann)=>{
        this.announcements = ann
        const limitData = this.announcements.slice(Math.max(ann.length - 3, 0));
       const reverseData = limitData.reverse();
       this.newThreeAnnouncements = reverseData;
       this.newAnnouncement = this.announcements.slice(this.announcements.length-1);
      })
    })
  }

  logoutFunction(){
    this.userService.logout();
    this.router.navigate(['/auth'])
  }
}
