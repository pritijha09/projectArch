import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondContactComponent } from './second-contact.component';

describe('SecondContactComponent', () => {
  let component: SecondContactComponent;
  let fixture: ComponentFixture<SecondContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
