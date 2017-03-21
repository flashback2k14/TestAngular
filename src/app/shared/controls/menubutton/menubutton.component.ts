import { Component, 
         OnInit,          
         EventEmitter,
         Input, 
         Output } from '@angular/core';

@Component({
  selector: 'app-menubutton',
  // templateUrl: './menubutton.component.html',
  // styleUrls: ['./menubutton.component.css'],
  styles:[`
    .menuButton{
      background-color: #2354ee;;
      width: 40px;
      height: 40px;
      position: relative;
      float: right;
      margin-top: 10px;
      margin-right: 5px;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .5s ease-in-out;
      -moz-transition: .5s ease-in-out;
      -o-transition: .5s ease-in-out;
      transition: .5s ease-in-out;
      cursor: pointer;
    }

    .menuButton span{
      position: absolute;
      background-color: #eef;
      height: 6px;
      width: 100%;
      border-radius: 9px;
    }

    .menuButton span:nth-child(1) {
      top: 0px;
    }

    .menuButton span:nth-child(2), .menuButton span:nth-child(3) {
      top: 12px;
    }

    .menuButton span:nth-child(4) {
      top: 24px;
    }

    .menuButton.Open span:nth-child(1) {
      top: 12px;
      width: 0%;
      left: 50%;
    }

    .menuButton.Open span:nth-child(2) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    .menuButton.Open span:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    .menuButton.Open span:nth-child(4) {
      top: 12px;
      width: 0%;
      left: 50%;
    } 
  `],
  template: `
    <div class="menuButton" [class.Open]="_isOpen" (click)="ToggleButton()">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  `
})
export class MenubuttonComponent implements OnInit {

  constructor() { }

  @Output() buttonToggled: EventEmitter<any> = new EventEmitter();
  

  ngOnInit() {
  }

private _isOpen: boolean = false;

  private ToggleButton() {
       
       this._isOpen = !this._isOpen;
           
       this.buttonToggled.emit(this._isOpen);      

  }

}
