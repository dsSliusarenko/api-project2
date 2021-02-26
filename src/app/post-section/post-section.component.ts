import {Component, OnInit, Input} from '@angular/core';
import {Post} from '../interfaces/post.interface';
import {HandlingPostService} from '../services/handling-post.service';

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.css'],
  providers: [HandlingPostService]
})
export class PostSectionComponent implements OnInit {

  @Input() post: Post;

  constructor() {
  }

  ngOnInit(): void {
  }

}
