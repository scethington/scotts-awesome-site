import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing.module';

import { TopNavBarComponent } from '../container/top-nav-bar/top-nav-bar.component';
import { IntroPostComponent } from '../container/intro-post/intro-post.component';
import { PostDetailComponent } from '../container/post-detail/post-detail.component';

import { PostsComponent } from '../container/posts/posts.component';
import { HomeComponent } from '../container/home/home.component';
import { AboutComponent } from '../container/about/about.component';
import { ContactComponent } from '../container/contact/contact.component';
import { SideBarComponent } from '../container/side-bar/side-bar.component';

import { PostsService } from '../shared/post/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    IntroPostComponent,
    PostsComponent,
    PostDetailComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouting
  ],
  providers: [ PostsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
