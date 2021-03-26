import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteModelComponent } from './admin-delete-model.component';

describe('AdminDeleteModelComponent', () => {
  let component: AdminDeleteModelComponent;
  let fixture: ComponentFixture<AdminDeleteModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
