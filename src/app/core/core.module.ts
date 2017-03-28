// Angular Modules
import { NgModule } from "@angular/core";
// Angular Components
import { Optional, SkipSelf } from "@angular/core";
// Own Components
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MainComponent } from "./main/main.component";

@NgModule({
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
