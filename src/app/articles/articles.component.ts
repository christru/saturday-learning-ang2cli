import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

items: number[];
  constructor() { 
    this.items = Array(30);
  }

  ngOnInit() {
  }
}
