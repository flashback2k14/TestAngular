import {
  Component, OnInit, Output, EventEmitter
} from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {

  private _isSidebarOpen = false;

  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  _toggleSidebar() {
    this._isSidebarOpen = !this._isSidebarOpen;
    this.toggleSidebar.emit(this._isSidebarOpen);
  }
}
