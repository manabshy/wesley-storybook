import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LumpSumInvestmentPageComponent } from './lump-sum-investment-page.component';

describe('LumpSumInvestmentPageComponent', () => {
  let component: LumpSumInvestmentPageComponent;
  let fixture: ComponentFixture<LumpSumInvestmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LumpSumInvestmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LumpSumInvestmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
