import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderModule } from '../header/header.module';
import { PeopleModule } from '../people/people.module';


@NgModule({
  imports: [
    CommonModule,
    PeopleModule,
    HeaderModule,
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent]
})
export class MainModule { }
