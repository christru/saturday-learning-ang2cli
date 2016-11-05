import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  items;

  constructor(private _hackerNewsAPIService: HackerNewsAPIService) { }

  ngOnInit() {
    this._hackerNewsAPIService.fetchArticles()
      .subscribe(
      items => this.items = items,
      error => console.log('Error fetching articles'));
  }
}
