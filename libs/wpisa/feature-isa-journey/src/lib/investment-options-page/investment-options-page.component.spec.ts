import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentOptionsPageComponent } from './investment-options-page.component';

describe('InvestmentOptionsPageComponent', () => {
  let component: InvestmentOptionsPageComponent;
  let fixture: ComponentFixture<InvestmentOptionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentOptionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentOptionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
