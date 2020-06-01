import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeCheckQ2FormComponent } from './knowledge-check-q2-form.component';

describe('KnowledgeCheckQ2FormComponent', () => {
  let component: KnowledgeCheckQ2FormComponent;
  let fixture: ComponentFixture<KnowledgeCheckQ2FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeCheckQ2FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeCheckQ2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
