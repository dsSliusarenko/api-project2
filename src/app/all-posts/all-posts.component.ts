import {Component, OnInit} from '@angular/core';
import {HandlingPostService} from '../services/handling-post.service';
import {Post} from '../interfaces/post.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css'],
  providers: [HandlingPostService]
})
export class AllPostsComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private handlingPostsService: HandlingPostService) {
  }

  ngOnInit(): void {
    this.posts$ = this.handlingPostsService.getPosts();
  }

}
