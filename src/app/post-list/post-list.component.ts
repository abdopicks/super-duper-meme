import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // AppComponent passera les Posts à un component PostListComponent
  @Input() tabPosts;

  constructor() { }

  ngOnInit() {

  }

}
