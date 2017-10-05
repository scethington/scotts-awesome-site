import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostsService {
  public posts: Array<any>;

  constructor(private http: Http) { 
    this.getPosts();
  }

  private getPosts() {
    return this.http.get('assets/posts.json')
      .map((res: any) => res.json())
      .subscribe((data) => {
        this.posts = data;
      });
  }

  public getPostById(id){
    var post = {};

    this.posts.forEach((item) => {
      if(id === item.id){
         post = item;
      }
    })

    return post;
  }
}
