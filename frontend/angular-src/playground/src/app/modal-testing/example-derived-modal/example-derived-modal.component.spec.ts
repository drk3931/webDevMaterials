import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDerivedModalComponent } from './example-derived-modal.component';

describe('ExampleDerivedModalComponent', () => {
  let component: ExampleDerivedModalComponent;
  let fixture: ComponentFixture<ExampleDerivedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDerivedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDerivedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
