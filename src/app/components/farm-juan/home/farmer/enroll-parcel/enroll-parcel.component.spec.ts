import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollParcelComponent } from './enroll-parcel.component';

describe('EnrollParcelComponent', () => {
  let component: EnrollParcelComponent;
  let fixture: ComponentFixture<EnrollParcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollParcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
