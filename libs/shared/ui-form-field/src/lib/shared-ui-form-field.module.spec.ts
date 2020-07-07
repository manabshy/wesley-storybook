import { async, TestBed } from '@angular/core/testing';
import { SharedUiFormFieldModule } from './shared-ui-form-field.module';

describe('SharedUiFormFieldModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiFormFieldModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiFormFieldModule).toBeDefined();
  });
});
