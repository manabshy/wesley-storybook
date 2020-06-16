import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationPageComponent } from './declaration-page.component';

describe('DeclarationPageComponent', () => {
  let component: DeclarationPageComponent;
  let fixture: ComponentFixture<DeclarationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
