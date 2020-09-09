import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningPopupComponent } from './dialogs/warning-popup/warning-popup.component';
import { HtmlEditorComponent } from './components/html-editor/html-editor.component';



@NgModule({
  declarations: [WarningPopupComponent, HtmlEditorComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
