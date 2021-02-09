import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { AutorizationSectionComponent } from './autorization-section/autorization-section.component';
import { PostSectionComponent } from './post-section/post-section.component';
import { ListSectionComponent } from './list-section/list-section.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { TempComponent } from './temp/temp.component';
import { FooterComponent } from './footer/footer.component';
import {CreatePostComponent} from './create-post/create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    AutorizationSectionComponent,
    PostSectionComponent,
    ListSectionComponent,
    NotFoundComponent,
    AllPostsComponent,
    SinglePostComponent,
    TempComponent,
    FooterComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
