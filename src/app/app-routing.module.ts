import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from '../container/home/home.component';
import { AboutComponent } from '../container/about/about.component';
import { ContactComponent } from '../container/contact/contact.component';

import { PostDetailComponent } from '../container/post-detail/post-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'post-details/:id', component: PostDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouting {}