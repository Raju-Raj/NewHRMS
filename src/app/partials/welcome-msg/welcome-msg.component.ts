import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserDetails } from 'src/app/shared/Modals/User';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent {
  user!:UserDetails
  private currentHour: number = new Date().getHours();
  public greeting: string;


  constructor(private authService:AuthService){
    authService.userObservable.subscribe((userDetails)=>{
      this.user = userDetails;
    })

    if (this.currentHour >= 5 && this.currentHour < 12) {
      this.greeting = 'Good Morning';
    } else if (this.currentHour >= 12 && this.currentHour < 18) {
      this.greeting = 'Good Afternoon';
    } else {
      this.greeting = 'Good Evening';
    }
  }

}
