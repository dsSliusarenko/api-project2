import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {NgModule} from '@angular/core';
import {PostComponent} from './post/post.component';
import {AllPostsComponent} from './all-posts/all-posts.component';
import {SinglePostComponent} from './single-post/single-post.component';
import {TempComponent} from './temp/temp.component';
import {CreatePostComponent} from './create-post/create-post.component';
import {AuthGuard} from './auth.guard';

const appRoutes: Routes = [
  {path: '', component: PostComponent},
  {
    path: 'posts',
    component: TempComponent,
    children: [
      {path: '', component: AllPostsComponent},
      {path: ':id', component: SinglePostComponent}
    ]
  },
  {path: 'create', component: CreatePostComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule {
}
