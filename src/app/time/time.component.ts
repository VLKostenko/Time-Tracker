import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { fade } from './../fade.anim';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
  animations: [fade]

})
export class TimeComponent implements OnInit {

  constructor(private data: DataService) { }

  time_entries: Object;

  ngOnInit() {
    this.data.getTime().subscribe(data => {
      this.time_entries = data;
      // console.log(this.time_entries);
      }
    )
  }

}
