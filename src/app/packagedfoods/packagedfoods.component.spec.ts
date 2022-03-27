import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagedfoodsComponent } from './packagedfoods.component';

describe('PackagedfoodsComponent', () => {
  let component: PackagedfoodsComponent;
  let fixture: ComponentFixture<PackagedfoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagedfoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagedfoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
