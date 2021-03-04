import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HandlingPostService} from '../../services/handling-post.service';
import {Router} from '@angular/router';
import {DialogContentExampleDialogComponent} from '../../dialog-content-example-dialog/dialog-content-example-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ExitWithoutSaveComponent} from '../../dialogs/exit-without-save/exit-without-save.component';

@Component({
  selector: 'app-create-post',
  templateUrl: 'create-post.component.html',
  styleUrls: ['create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  form: FormGroup;
  errors: any[] = [];
  isPostCreated = false;

  constructor(private formBuilder: FormBuilder,
              private handlingPostService: HandlingPostService,
              private router: Router,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      description: ['', Validators.required],
      // image: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.handlingPostService.sendPost(this.form.value.content, this.form.value.description, this.form.value.title).subscribe(() => {
      this.isPostCreated = true;
      setTimeout(() => {
        this.router.navigate(['/admin/posts']);
      }, 2500);
    }, error => {
      this.errors.push(error);
    });
  }

  showExitAlert(): void {
    if (this.form.touched) {
      const dialogRef = this.dialog.open(ExitWithoutSaveComponent);
      dialogRef.afterClosed().subscribe(() => {
      });
    } else {
      this.router.navigate(['/admin/posts']);
    }
  }
}
