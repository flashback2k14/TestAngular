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
        transform: 'translate3d(250px, 0, 0)'
      })),
      state('out', style({
        transform: "translate3d(50px, 0, 0)"
      })),
      transition('in => out', animate('200ms ease-in-out')),
      transition('out => in', animate('200ms ease-in-out'))
    ]),
   ]
})

export class MainComponent implements OnInit {

  @Input() sidebarState: string = 'in';

  constructor() { }

  ngOnInit() { }
}
