import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Post} from '../interfaces/post.interface';
import {HandlingPostService} from '../services/handling-post.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.css'],
  providers: [HandlingPostService]
})
export class ListSectionComponent implements OnInit {

  @Output() sendPostEvent = new EventEmitter();

  selectItem: number;
  numberOfDefaultPosts = [1, 2, 3, 4, 5, 6, 7];

  disableSeeAllPostsButton = true;

  posts$: Observable<Post[]>;

  constructor(public handlingPostService: HandlingPostService) {
  }

  ngOnInit(): void {
    this.posts$ = this.handlingPostService.getPosts();
  }


  getClickEvent(post: Post): void {
    this.sendPostEvent.emit(post);
  }

  checkSelectPost(): void {
    this.disableSeeAllPostsButton = false;
  }

}
