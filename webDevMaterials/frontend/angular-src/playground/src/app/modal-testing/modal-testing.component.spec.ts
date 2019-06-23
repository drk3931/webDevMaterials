import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTestingComponent } from './modal-testing.component';

describe('ModalTestingComponent', () => {
  let component: ModalTestingComponent;
  let fixture: ComponentFixture<ModalTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
