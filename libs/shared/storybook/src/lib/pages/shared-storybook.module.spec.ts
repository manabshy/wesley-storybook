import { async, TestBed } from '@angular/core/testing';
import { SharedStorybookModule } from './shared-storybook.module';

describe('SharedStorybookModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedStorybookModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedStorybookModule).toBeDefined();
  });
});
