import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRouteListComponent } from './admin-route-list.component';

describe('AdminRouteListComponent', () => {
  let component: AdminRouteListComponent;
  let fixture: ComponentFixture<AdminRouteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRouteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRouteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
