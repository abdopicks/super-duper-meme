export class Post{
    public loveIts:number;
    public createdAt:string;

    constructor(
        public title:string,
        public content:string
    ){
        this.createdAt = Date.now().toString();
    }
}