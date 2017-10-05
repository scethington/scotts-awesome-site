import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from '../../shared/post/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public selectedPost: any;

  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.selectedPost = this.postService.getPostById(id);
    })
  }
}
