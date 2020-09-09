import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialContactComponent } from './initial-contact.component';

describe('InitialContactComponent', () => {
  let component: InitialContactComponent;
  let fixture: ComponentFixture<InitialContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
