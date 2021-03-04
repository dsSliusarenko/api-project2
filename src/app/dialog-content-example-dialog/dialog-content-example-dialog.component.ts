import {Component, OnInit} from '@angular/core';
import {PostTableComponent} from '../admin-panel/post-table/post-table.component';

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.css']
})
export class DialogContentExampleDialogComponent implements OnInit {
  numberSelectedPostToDelete;

  constructor() {
    this.numberSelectedPostToDelete = JSON.parse(localStorage.getItem('numberSelectedPostToDelete'));
  }

  ngOnInit(): void {
  }

  deletePost(): void {
    console.log(this.numberSelectedPostToDelete);
  }
}
