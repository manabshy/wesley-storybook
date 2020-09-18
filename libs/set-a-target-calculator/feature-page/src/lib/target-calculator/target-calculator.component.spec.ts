import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetCalculatorComponent } from './target-calculator.component';

describe('TargetCalculatorComponent', () => {
  let component: TargetCalculatorComponent;
  let fixture: ComponentFixture<TargetCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
