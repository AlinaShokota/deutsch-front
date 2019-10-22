import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NounsCardsComponent } from './nouns-cards.component';

describe('NounsCardsComponent', () => {
  let component: NounsCardsComponent;
  let fixture: ComponentFixture<NounsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NounsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NounsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
