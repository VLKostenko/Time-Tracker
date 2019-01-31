import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  'Content-Type':  'application/json',
  "X-Redmine-API-Key": "2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c" });


@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<any> {
    return this.http.get('https://redmine.ekreative.com' + '/projects.json', {headers});
  }

  public getIssues(): Observable<any> {
    return this.http.get('https://redmine.ekreative.com' + '/issues.json?limit=100', {headers});
  }

  public getTime(): Observable<any> {
    return this.http.get('https://redmine.ekreative.com' + '/time_entries.json?limit=100', {headers});
  }
}
