import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnnounceDialogComponent } from './add-announce-dialog.component';

describe('AddAnnounceDialogComponent', () => {
  let component: AddAnnounceDialogComponent;
  let fixture: ComponentFixture<AddAnnounceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnnounceDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnnounceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
