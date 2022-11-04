import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModuleComponent } from './admin-module.component';

describe('AdminModuleComponent', () => {
  let component: AdminModuleComponent;
  let fixture: ComponentFixture<AdminModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
