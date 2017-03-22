import { Component, 
         OnInit ,
         Input,
         trigger,
         state, 
         style, 
         transition, 
         animate, 
         AnimationTransitionEvent } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('slideInOutMain', [
      state('in', style({
        marginLeft: '250px'
      })),
      state('out', style({
        marginLeft: '50px'
      })),
      transition('in => out', animate('200ms ease-in-out')),
      transition('out => in', animate('200ms ease-in-out'))
    ]),
   ]
})

export class MainComponent implements OnInit {

  constructor() { }
 
  // private _sidebarState: string = 'out';

  @Input() sidebarState: string = 'in'

  ngOnInit() {
   
  }

}
