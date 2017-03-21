import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MenubuttonModule } from '../controls/menubutton/menubutton.module';

@NgModule({
  imports: [
    CommonModule,
    MenubuttonModule
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [SidebarComponent]
})
export class SidebarModule { }
