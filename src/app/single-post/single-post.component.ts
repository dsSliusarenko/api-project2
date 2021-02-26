import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HandlingPostService} from '../services/handling-post.service';
import {Observable} from 'rxjs';
import {Post} from '../interfaces/post.interface';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  currentId: number;
  post$: Observable<Post>;

  constructor(private activatedRoute: ActivatedRoute, private handlingPostService: HandlingPostService) {
    this.activatedRoute.params.subscribe(value => this.currentId = value.id);
  }

  ngOnInit(): void {
    this.post$ = this.handlingPostService.getSinglePost(this.currentId);
  }


}
