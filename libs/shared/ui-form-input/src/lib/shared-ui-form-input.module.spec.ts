import { async, TestBed } from '@angular/core/testing';
import { SharedUiFormInputModule } from './shared-ui-form-input.module';

describe('SharedUiFormInputModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiFormInputModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiFormInputModule).toBeDefined();
  });
});
