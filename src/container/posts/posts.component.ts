import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/post/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public postList: any;

  constructor(private posts: PostsService) { }

  ngOnInit() {
    this.postList = this.posts.getPosts();
  }

  public faith(){
    return "Bottom Buts";
  }

  public getPostDescription(post){
    return post.content.substring(0, 300);
  }
}
