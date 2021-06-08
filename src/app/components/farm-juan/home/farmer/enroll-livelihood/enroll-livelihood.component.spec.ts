import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollLivelihoodComponent } from './enroll-livelihood.component';

describe('EnrollLivelihoodComponent', () => {
  let component: EnrollLivelihoodComponent;
  let fixture: ComponentFixture<EnrollLivelihoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollLivelihoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollLivelihoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
