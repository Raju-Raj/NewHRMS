import { Component, ViewChild } from '@angular/core';
import { AnnounementService } from '../../AnnouncementService/announement.service';
import { AnnouncementModal } from 'src/app/shared/Modals/Announcement';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AddAnnounceDialogComponent } from '../../dialogs/add-announce-dialog/add-announce-dialog.component';

@Component({
  selector: 'app-announcement-page',
  templateUrl: './announcement-page.component.html',
  styleUrls: ['./announcement-page.component.css']
})
export class AnnouncementPageComponent {

  displayedColumns: string[] = ['subject', 'description', 'startdate', 'enddate','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  announcements!:AnnouncementModal[];

  constructor(private annService:AnnounementService,private _dialog:MatDialog){
    this.getAnnouncementsMethod()
  }


  getAnnouncementsMethod(){
    this.annService.getAnnouncements().subscribe(()=>{
      this.annService.announcementObservable.subscribe((ann)=>{
        this.announcements = ann
        this.dataSource = new MatTableDataSource(ann)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  openAddAnnouneForm(){
    const dialogRef=this._dialog.open(AddAnnounceDialogComponent);
     dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getAnnouncementsMethod()
        }
      }
    })
  }


}
