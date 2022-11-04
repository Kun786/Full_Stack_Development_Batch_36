import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcahseSuccessfulComponent } from './purcahse-successful.component';

describe('PurcahseSuccessfulComponent', () => {
  let component: PurcahseSuccessfulComponent;
  let fixture: ComponentFixture<PurcahseSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurcahseSuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurcahseSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
