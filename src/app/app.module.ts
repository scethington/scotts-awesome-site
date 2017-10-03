import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing.module';

import { TopNavBarComponent } from '../container/top-nav-bar/top-nav-bar.component';
import { IntroPostComponent } from '../container/intro-post/intro-post.component';
import { PostDetailComponent } from '../container/post-detail/post-detail.component';

import { PostsComponent } from '../container/posts/posts.component';
import { HomeComponent } from '../container/home/home.component';
import { AboutComponent } from '../container/about/about.component';

import { PostsService } from '../shared/post/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    IntroPostComponent,
    PostsComponent,
    PostDetailComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [ PostsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
