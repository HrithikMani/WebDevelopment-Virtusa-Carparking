import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModelUpdateCarComponent } from './admin-model-update-car.component';

describe('AdminModelUpdateCarComponent', () => {
  let component: AdminModelUpdateCarComponent;
  let fixture: ComponentFixture<AdminModelUpdateCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModelUpdateCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModelUpdateCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
