import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../../shared/post/posts.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  public postList: any;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(public postService: PostsService) { }

  ngOnInit() {
    
  }

  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public getPostDescription(post){
    return post.content[0].substring(0, 300);
  }
}
