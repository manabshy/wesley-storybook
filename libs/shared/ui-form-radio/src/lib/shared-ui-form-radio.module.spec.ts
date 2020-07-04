import { async, TestBed } from '@angular/core/testing';
import { SharedUiFormRadioModule } from './shared-ui-form-radio.module';

describe('SharedUiFormRadioModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiFormRadioModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiFormRadioModule).toBeDefined();
  });
});
