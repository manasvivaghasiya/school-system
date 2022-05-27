import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languages:boolean=false;
  logout:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  togglebtn(){
   

  }
  flagImg(){
    debugger
    this.languages=true;
  }


}
