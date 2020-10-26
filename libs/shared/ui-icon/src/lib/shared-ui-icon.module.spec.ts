import { async, TestBed } from '@angular/core/testing';
import { SharedUiIconModule } from './shared-ui-icon.module';

describe('SharedUiIconModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiIconModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiIconModule).toBeDefined();
  });
});
