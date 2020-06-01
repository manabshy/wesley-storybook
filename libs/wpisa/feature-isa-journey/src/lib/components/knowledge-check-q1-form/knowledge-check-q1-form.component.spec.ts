import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeCheckQ1FormComponent } from './knowledge-check-q1-form.component';

describe('KnowledgeCheckQ1FormComponent', () => {
  let component: KnowledgeCheckQ1FormComponent;
  let fixture: ComponentFixture<KnowledgeCheckQ1FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeCheckQ1FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeCheckQ1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
