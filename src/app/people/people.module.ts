// Angular Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
// Own Components
import { PeopleComponent } from "./people.component";
import { ProfileComponent } from "./profile/profile.component";
import { NewPersonComponent } from "./new-person/new-person.component";
// Own Services
import { PeopleService } from "./people.service";

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [PeopleComponent],
  declarations: [
    PeopleComponent, 
    ProfileComponent, 
    NewPersonComponent
  ],
  providers: [PeopleService]
})
export class PeopleModule { }
