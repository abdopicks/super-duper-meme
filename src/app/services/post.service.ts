import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

export class PostService{

    postSubject = new Subject<Post[]>();
    private posts:Post[] = [
        {
            title : 'Titre 1',
            content : 'Contenu 1',
            loveIts : 0,
            createdAt : '2019-10-04 10:14:41'
        }
    ];

    constructor(){}

    addNewPost(post:Post){
        this.posts.push(post);
        this.emitPosts();
    }

    removePost(id : number){
        this.posts.splice(id,1);
        this.emitPosts();
    }

    emitPosts(){
        this.postSubject.next(this.posts.slice());
    }

}