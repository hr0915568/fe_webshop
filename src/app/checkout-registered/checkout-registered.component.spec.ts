import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutRegisteredComponent } from './checkout-registered.component';

describe('CheckoutRegisteredComponent', () => {
  let component: CheckoutRegisteredComponent;
  let fixture: ComponentFixture<CheckoutRegisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutRegisteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
