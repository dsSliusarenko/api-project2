import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { AuthorizationSectionComponent } from './autorization-section/authorization-section.component';
import { PostSectionComponent } from './post-section/post-section.component';
import { ListSectionComponent } from './list-section/list-section.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { TempComponent } from './temp/temp.component';
import { FooterComponent } from './footer/footer.component';
import {CreatePostComponent} from './admin-panel/create-post/create-post.component';
import {ProfileComponent} from './autorization-section/profile-section/profile.component';
import {SpinnerComponent} from './shared/spinner.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './admin-panel/users/users.component';
import { DashboardComponent } from './admin-panel/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    AuthorizationSectionComponent,
    PostSectionComponent,
    ListSectionComponent,
    NotFoundComponent,
    AllPostsComponent,
    SinglePostComponent,
    TempComponent,
    FooterComponent,
    CreatePostComponent,
    ProfileComponent,
    SpinnerComponent,
    AdminPanelComponent,
    RegistrationComponent,
    UsersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
