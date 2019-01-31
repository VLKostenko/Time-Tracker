import { Component, OnInit} from '@angular/core';
import { DataService } from './../data.service';
import { LocalStorageService } from 'ngx-webstorage';
import { fade } from './../fade.anim';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [fade]
})


export class ProjectComponent implements OnInit {

  constructor(private data: DataService, private storage: LocalStorageService) { }

  projects: Object;
  attribute: string;
  todoArray:  Array<any> = [];

  public addTodo(value: string) {
    this.todoArray.push(value);
    // console.log(this.todoArray);
  }

  // get LocalStorage
  public getLocalStorage() {
    this.storage.store('boundValue', this.attribute);
  }

  ngOnInit() {
    // get Data
    this.data.getProjects().subscribe(data => {
      this.projects = data;
      // console.log(this.projects);
      }
    )
  }
}
