import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor() { }

  ngOnInit() {

  }
  //— cette modification aura uniquement un effet sur le component, et n'a pas besoin d'être remontée au component parent
  getMoreLove(){
    this.postLoveIts ++;
  }

  getLessLove(){
    this.postLoveIts -- ;
  }
}
