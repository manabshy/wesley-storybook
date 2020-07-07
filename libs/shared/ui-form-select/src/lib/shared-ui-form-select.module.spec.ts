import { async, TestBed } from '@angular/core/testing';
import { SharedUiFormSelectModule } from './shared-ui-form-select.module';

describe('SharedUiFormSelectModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiFormSelectModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiFormSelectModule).toBeDefined();
  });
});
