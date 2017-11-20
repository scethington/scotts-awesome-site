import { Injectable, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostsService {
  public posts: Array<any>;

  constructor(private http: Http, private router: Router) { 
    this.getPosts();

    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
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
