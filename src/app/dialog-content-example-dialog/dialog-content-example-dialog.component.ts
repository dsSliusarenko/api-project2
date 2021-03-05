import {Component, Inject} from '@angular/core';
import {HandlingPostService} from '../services/handling-post.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.css']
})
export class DialogContentExampleDialogComponent {
  numberSelectedPostToDelete;
  isDeleted = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { name: number },
              private handlingPostService: HandlingPostService) {
    this.numberSelectedPostToDelete = data;
  }

  deletePost(): void {
    this.handlingPostService.deletePost(this.numberSelectedPostToDelete.id).subscribe(resp => {
      this.isDeleted = true;
      setTimeout(() => {
        document.location.reload();
      }, 2000);
    }, error => {
      console.log(error);
    });
  }
}
