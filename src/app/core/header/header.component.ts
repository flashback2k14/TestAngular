import {
  Component, trigger, state, OnInit
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  websitename = 'hicode.de';
  
  constructor() { }

  ngOnInit() { }

}
