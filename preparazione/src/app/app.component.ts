import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Root } from './typelist.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'preparazione';
 List: Root = {count:0, next:null, previous: null, results:[]} ;
  obs!: Observable<Root>;
  constructor(private http: HttpClient) {
    this.obs = this.http.get<Root>("https://picsum.photos/v2");
    this.obs.subscribe(this.doSomething)
  }
  doSomething = (data: Root) => {
    this.List = data;
  }
  getLastPart(arg0: string) {
    let myvect = arg0.split('/')
    return myvect[6]
  }

}
