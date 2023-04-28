import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserDetails } from 'src/app/shared/Modals/User';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  user!:UserDetails;

  constructor(private authService:AuthService){
    authService.userObservable.subscribe((userDetails)=>{
      this.user = userDetails;
    })
  }

}
