import { Component, OnInit } from '@angular/core';
import { fade } from './../fade.anim';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fade]

})
export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

}
