import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
 
import { HeaderModule } from './header/header.module';
import { PeopleModule } from './people/people.module';
import { MenubuttonModule } from './controls/menubutton/menubutton.module';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PeopleModule,
    HeaderModule,
    MenubuttonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
