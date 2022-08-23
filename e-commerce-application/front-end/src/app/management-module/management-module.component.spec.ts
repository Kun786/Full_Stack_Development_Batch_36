import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementModuleComponent } from './management-module.component';

describe('ManagementModuleComponent', () => {
  let component: ManagementModuleComponent;
  let fixture: ComponentFixture<ManagementModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
