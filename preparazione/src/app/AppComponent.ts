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
  AnimeList: Root = {
    author_url: '',
    discord_url: '',
    version: '',
    parser_version: '',
    website_url: '',
    documentation_url: '',
    github_url: '',
    parser_github_url: '',
    production_api_url: '',
    status_url: '',
    myanimelist_heartbeat: undefined
  };
  obs!: Observable<Root>;
  Root: any;
  constructor(private http: HttpClient) {
    this.obs = this.http.get<Root>("https://api.jikan.moe/v4/anime");
    this.obs.subscribe(this.doSomething);
  }
  doSomething = (data: Root) => {
    this.AnimeList = data;
  };
  getLastPart(arg0: string) {
    let myvect = arg0.split('/');
    return myvect[6];
  }

}
