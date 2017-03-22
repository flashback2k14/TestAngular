// Angular Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// Own Components
import { MenubuttonComponent } from "./controls/menubutton/menubutton.component";

@NgModule({
  imports: [CommonModule],
  declarations: [MenubuttonComponent],
  exports: [MenubuttonComponent, CommonModule]
})
export class SharedModule { }
