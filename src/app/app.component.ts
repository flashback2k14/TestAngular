import { Component, 
         trigger,
         state, 
         style, 
         transition, 
         animate, 
         AnimationTransitionEvent } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOutSidebar', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-200px, 0, 0)'
      })),
      transition('in => out', animate('250ms ease-in-out')),
      transition('out => in', animate('150ms ease-in-out'))
    ])
  ]
})
export class AppComponent {

  post = {
    sidebarState:'out',
    title: 'app works!'
  }

  title = 'app works!';

  private sidebarState: string = 'out';
  private ToggleSidebar() {
    // 1-line if statement that toggles the value:
   this.sidebarState = this.sidebarState === 'out' ? 'in' : 'out';
   this.post.sidebarState = this.sidebarState
  }

private _currentCount: number = 0;
    private RaiseCount() {
      // this._currentCount += 1;
       this._currentCount++ ;
      console.log("test")
    }

}