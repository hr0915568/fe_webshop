import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginButtonComponent } from './loggin-button.component';

describe('LogginButtonComponent', () => {
  let component: LogginButtonComponent;
  let fixture: ComponentFixture<LogginButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogginButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
