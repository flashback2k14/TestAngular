// Angular Modules
import { NgModule } from "@angular/core";
// Angular Components
import { Optional, SkipSelf } from "@angular/core";
// Own Modules
import { SharedModule } from "./../shared/shared.module";
import { PeopleModule } from "./../people/people.module";
// Own Components
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";

@NgModule({
  imports: [
    SharedModule,
    PeopleModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MainComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    MainComponent
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule is already loaded. Import it in the AppModule only");
    }
  }
}
