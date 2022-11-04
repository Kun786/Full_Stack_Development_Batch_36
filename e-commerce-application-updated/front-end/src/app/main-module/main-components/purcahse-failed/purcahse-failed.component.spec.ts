import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcahseFailedComponent } from './purcahse-failed.component';

describe('PurcahseFailedComponent', () => {
  let component: PurcahseFailedComponent;
  let fixture: ComponentFixture<PurcahseFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurcahseFailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurcahseFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
