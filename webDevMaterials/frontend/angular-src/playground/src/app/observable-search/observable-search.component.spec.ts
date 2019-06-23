import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableSearchComponent } from './observable-search.component';

describe('ObservableSearchComponent', () => {
  let component: ObservableSearchComponent;
  let fixture: ComponentFixture<ObservableSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
