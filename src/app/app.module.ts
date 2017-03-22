// Angular Modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
// Own Modules
import { CoreModule } from "./core/core.module";
import { PeopleModule } from "./people/people.module";
import { MainModule } from './main/main.Module';
// Own Components
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    PeopleModule,
    MainModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
