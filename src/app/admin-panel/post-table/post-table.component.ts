import {Component, OnInit} from '@angular/core';
import {HandlingPostService} from '../../services/handling-post.service';
import {Observable} from 'rxjs';
import {Post} from '../../interfaces/post.interface';
import {Router} from '@angular/router';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {
  constructor(private handlingPostService: HandlingPostService, private router: Router) {
  }

  displayedColumns: string[] = ['id', 'image', 'title', 'description', 'created_at', 'action'];
  posts$: Observable<Post[]>;

  ngOnInit(): void {
    this.posts$ = this.handlingPostService.getPosts();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

  editPost(id: number): void {
    localStorage.setItem('numberOfEditPost', JSON.stringify(id));
    this.router.navigate(['/admin/posts/edit']);
  }

}
