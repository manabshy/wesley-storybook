import { async, TestBed } from '@angular/core/testing';
import { SharedUiFormCheckboxModule } from './shared-ui-form-checkbox.module';

describe('SharedUiFormCheckboxModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiFormCheckboxModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiFormCheckboxModule).toBeDefined();
  });
});
