import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeCheckPageComponent } from './knowledge-check-page.component';

describe('KnowledgeCheckPageComponent', () => {
  let component: KnowledgeCheckPageComponent;
  let fixture: ComponentFixture<KnowledgeCheckPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeCheckPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeCheckPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
