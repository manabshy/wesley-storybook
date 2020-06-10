import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressLookupFormComponent } from './address-lookup-form.component';

describe('AddressFormComponent', () => {
  let component: AddressLookupFormComponent;
  let fixture: ComponentFixture<AddressLookupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressLookupFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressLookupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
