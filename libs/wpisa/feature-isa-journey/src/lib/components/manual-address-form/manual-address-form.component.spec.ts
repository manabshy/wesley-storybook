import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualAddressFormComponent } from './manual-address-form.component';

describe('AddressFormComponent', () => {
  let component: ManualAddressFormComponent;
  let fixture: ComponentFixture<ManualAddressFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManualAddressFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
