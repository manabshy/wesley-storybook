import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsPageComponent } from './customer-details-page.component';

describe('CustomerDetailsPageComponent', () => {
  let component: CustomerDetailsPageComponent;
  let fixture: ComponentFixture<CustomerDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
