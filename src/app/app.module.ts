import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { PostService } from './services/post.service';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'posts' , component: PostListComponent},
  { path: 'new' , component: NewComponentComponent },
  { path: '' , redirectTo : 'posts' , pathMatch : 'full' },  
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
