import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBookingComponent } from './model-booking.component';

describe('ModelBookingComponent', () => {
  let component: ModelBookingComponent;
  let fixture: ComponentFixture<ModelBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
