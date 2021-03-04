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
  constructor(private handlingPostService: HandlingPostService, private router: Router, public dialog: MatDialog) {
  }

  displayedColumns: string[] = ['id', 'image', 'title', 'description', 'created_at', 'action'];
  posts$: Observable<Post[]>;

  // this field uses to define which post should be deleted
  // numberOfSelectedPost;

  ngOnInit(): void {
    this.posts$ = this.handlingPostService.getPosts();
  }

  openDialog(id: number): void {

    // set value to define post, which should be deleted
    localStorage.setItem('numberSelectedPostToDelete', JSON.stringify(id));

    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  editPost(id: number): void {
    localStorage.setItem('numberOfEditPost', JSON.stringify(id));
    this.router.navigate(['/admin/posts/edit']);
  }

}
