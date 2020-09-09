import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidpointReminderComponent } from './midpoint-reminder.component';

describe('MidpointReminderComponent', () => {
  let component: MidpointReminderComponent;
  let fixture: ComponentFixture<MidpointReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidpointReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidpointReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
