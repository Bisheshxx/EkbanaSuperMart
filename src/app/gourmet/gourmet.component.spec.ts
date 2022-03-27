import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GourmetComponent } from './gourmet.component';

describe('GourmetComponent', () => {
  let component: GourmetComponent;
  let fixture: ComponentFixture<GourmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GourmetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GourmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
