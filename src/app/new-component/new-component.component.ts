import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  postForm:FormGroup;

  constructor(private route:Router,private postService:PostService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      title : ['' , Validators.required],
      content : ['' , Validators.required]
    });
  }

  onSubmit(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const post = new Post(title,content);
    post.loveIts = 0;
    this.postService.addNewPost(post);
    this.route.navigate(['posts']);
  }

}
