import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector:'.app-servers',
  selector:'app-server',

  template:`
  <app-server> </app-server>
  <app-server> </app-server>`
  ,


  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
