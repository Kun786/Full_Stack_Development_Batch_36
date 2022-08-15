import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelOrderComponent } from './cancel-order.component';

describe('CancelOrderComponent', () => {
  let component: CancelOrderComponent;
  let fixture: ComponentFixture<CancelOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
