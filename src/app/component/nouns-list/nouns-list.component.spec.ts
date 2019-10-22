import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NounsListComponent } from './nouns-list.component';

describe('NounsListComponent', () => {
  let component: NounsListComponent;
  let fixture: ComponentFixture<NounsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NounsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NounsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
