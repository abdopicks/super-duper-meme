import { Component,Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

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
  @Input() id: number;

  constructor(private postService:PostService) { }

  ngOnInit() {

  }

  onRemove(id:number){
    this.postService.removePost(id);
  }
  
  //— cette modification aura uniquement un effet sur le component, et n'a pas besoin d'être remontée au component parent
  getMoreLove(){
    this.postLoveIts ++;
  }

  getLessLove(){
    this.postLoveIts -- ;
  }
}
