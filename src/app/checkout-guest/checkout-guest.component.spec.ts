import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutGuestComponent } from './checkout-guest.component';

describe('CheckoutGuestComponent', () => {
  let component: CheckoutGuestComponent;
  let fixture: ComponentFixture<CheckoutGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
