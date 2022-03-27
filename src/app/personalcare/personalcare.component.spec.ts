import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalcareComponent } from './personalcare.component';

describe('PersonalcareComponent', () => {
  let component: PersonalcareComponent;
  let fixture: ComponentFixture<PersonalcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalcareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
