import {Component, OnInit} from '@angular/core';
import {PostTableComponent} from '../admin-panel/post-table/post-table.component';
import {HandlingPostService} from '../services/handling-post.service';

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.css']
})
export class DialogContentExampleDialogComponent implements OnInit {
  numberSelectedPostToDelete;
  isDeleted = false;

  constructor(private handlingPostService: HandlingPostService) {
    this.numberSelectedPostToDelete = JSON.parse(localStorage.getItem('numberSelectedPostToDelete'));
  }

  ngOnInit(): void {
  }

  deletePost(): void {
    this.handlingPostService.deletePost(this.numberSelectedPostToDelete).subscribe(resp => {
      this.isDeleted = true;
      setTimeout(() => {
        document.location.reload();
      }, 2000);
    }, error => {
      console.log(error);
    });
  }
}
