import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAnalyticsComponent } from './product-analytics.component';

describe('ProductAnalyticsComponent', () => {
  let component: ProductAnalyticsComponent;
  let fixture: ComponentFixture<ProductAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
