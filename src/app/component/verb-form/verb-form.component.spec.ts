import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbFormComponent } from './verb-form.component';

describe('VerbFormComponent', () => {
  let component: VerbFormComponent;
  let fixture: ComponentFixture<VerbFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
