import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleEmployeeComponent } from './get-single-employee.component';

describe('GetSingleEmployeeComponent', () => {
  let component: GetSingleEmployeeComponent;
  let fixture: ComponentFixture<GetSingleEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSingleEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSingleEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
