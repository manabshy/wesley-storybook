import { async, TestBed } from '@angular/core/testing';
import { SharedUiPipesModule } from './shared-ui-pipes.module';

describe('SharedUiPipesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiPipesModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiPipesModule).toBeDefined();
  });
});
