import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { fade } from './../fade.anim';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
  animations: [fade]

})
export class IssuesComponent implements OnInit {

  constructor(private data: DataService) { }

  issues: Object;

  ngOnInit() {
    this.data.getIssues().subscribe(data => {
      this.issues = data;
      // console.log(this.issues);
      }
    )
  }
}
