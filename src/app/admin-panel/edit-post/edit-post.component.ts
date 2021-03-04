import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HandlingPostService} from '../../services/handling-post.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: 'edit-post.component.html',
  styleUrls: ['edit-post.component.css']
})

export class EditPostComponent implements OnInit {
  form: FormGroup;
  errors: any[] = [];
  isPostEdited = false;

  numberOfEditPost;

  constructor(private formBuilder: FormBuilder, private handlingPostService: HandlingPostService, private router: Router) {
    this.numberOfEditPost = JSON.parse(localStorage.getItem('numberOfEditPost'));
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      description: ['', Validators.required],
      // image: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.handlingPostService.getSinglePost(this.numberOfEditPost).subscribe(value => {
      this.form.patchValue(value);
    });
  }

  onSubmit(): void {
    // important dont forget subscribe on stream, which will provided by handlingPostService
    console.log(this.form.value);
    this.handlingPostService.editPost(this.numberOfEditPost, this.form.value).subscribe(() => {
      // console.log(resp);
      this.router.navigate(['/admin/posts']);
    }, error => {
      console.log(error);
    });
  }

}


