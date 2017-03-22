// Angular Modules
import { NgModule } from "@angular/core";
// Angular Components
import { Optional, SkipSelf } from "@angular/core";
// Own Modules
import { SharedModule } from "./../shared/shared.module";
// Own Components
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  imports: [SharedModule],
  declarations: [HeaderComponent, SidebarComponent],
  exports: [HeaderComponent, SidebarComponent]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule is already loaded. Import it in the AppModule only");
    }
  }
}
