import {
  Component, OnInit, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter();
 private _isSidebarOpen: boolean = false;

  private ToggleSidebar() {
       
       this._isSidebarOpen = !this._isSidebarOpen;
           
       this.toggleSidebar.emit(this._isSidebarOpen);      

  }

}
