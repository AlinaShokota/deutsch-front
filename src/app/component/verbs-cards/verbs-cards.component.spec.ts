import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsCardsComponent } from './verbs-cards.component';

describe('VerbsCardsComponent', () => {
  let component: VerbsCardsComponent;
  let fixture: ComponentFixture<VerbsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
