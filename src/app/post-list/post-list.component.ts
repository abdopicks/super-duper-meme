import { Component,Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {

  posts:Post[];
  postSubscription : Subscription;

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts)=>{
        this.posts = posts;
      },
      (error)=>{
        console.log("Erreur : " + error);
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

}
