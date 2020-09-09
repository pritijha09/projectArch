import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimRoutingModule } from './claim-routing.module';
import { InitialContactComponent } from './components/initial-contact/initial-contact.component';
import { SecondContactComponent } from './components/second-contact/second-contact.component';
import { MidpointReminderComponent } from './components/midpoint-reminder/midpoint-reminder.component';
import { ClaimListComponent } from './components/claim-list/claim-list.component';
import { ClaimDetailsComponent } from './components/claim-details/claim-details.component';


@NgModule({
  declarations: [InitialContactComponent, SecondContactComponent, MidpointReminderComponent, ClaimListComponent, ClaimDetailsComponent],
  imports: [
    CommonModule,
    ClaimRoutingModule
  ]
})
export class ClaimModule { }
