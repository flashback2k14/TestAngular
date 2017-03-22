import { Component, trigger, state, style, transition, animate, AnimationTransitionEvent } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("slideInOut", [
      state("in", style({
        transform: "translate3d(0, 0, 0)"
      })),
      state("out", style({
        transform: "translate3d(-200px, 0, 0)"
      })),
      transition("in => out", animate("400ms ease-in-out")),
      transition("out => in", animate("400ms ease-in-out"))
    ]),
  ]
})
export class AppComponent {

  title = "app works!";

  _sidebarState = "out";

  _currentCount = 0;

  toggleSidebar() {
    // 1-line if statement that toggles the value:
    this._sidebarState = this._sidebarState === "out" ? "in" : "out";
  }

  raiseCount() {
    // this._currentCount += 1;
    this._currentCount++;
    console.log("test");
  }
}
