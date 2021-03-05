import {Component, OnInit} from '@angular/core';
import {HandlingPostService} from '../../services/handling-post.service';
import {Observable} from 'rxjs';
import {Post} from '../../interfaces/post.interface';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogContentExampleDialogComponent} from '../../dialog-content-example-dialog/dialog-content-example-dialog.component';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'image', 'title', 'description', 'created_at', 'action'];
  posts$: Observable<Post[]>;

  constructor(private handlingPostService: HandlingPostService, private router: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.posts$ = this.handlingPostService.getPosts();
  }

  showDeleteAlert(id: number): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent, {data: {id}});
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  // editPost(id: number): void {
  //   // localStorage.setItem('numberOfEditPost', JSON.stringify(id));
  //   // this.router.navigate(['/admin/posts/id}']);
  // }

}
