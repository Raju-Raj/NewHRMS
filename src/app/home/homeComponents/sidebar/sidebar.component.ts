import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navclass:boolean=false;
  menuShow:boolean=false;
  toggleMenu(){
    this.navclass = !this.navclass
  }

  menuBar(){
    this.menuShow = !this.menuShow
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 992px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
          this.navclass = true
      }
    });

    this.breakpointObserver.observe([
      "(max-width: 600px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
          this.navclass = false
      }
    });
  }

}
