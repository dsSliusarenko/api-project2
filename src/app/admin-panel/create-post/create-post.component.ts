import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HandlingPostService} from '../../services/handling-post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: 'create-post.component.html',
  styleUrls: ['create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  form: FormGroup;
  errors: any[] = [];
  isPostCreated = false;

  constructor(private formBuilder: FormBuilder, private handlingPostService: HandlingPostService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      description: ['', Validators.required],
      // image: ['', Validators.required],
    });
  }

  // Onsubmit without interceptors
  onSubmit(): void {
    this.handlingPostService.sendPost(this.form.value.content, this.form.value.description, this.form.value.title).subscribe(() => {
      this.isPostCreated = true;
      setTimeout(() => {
        this.router.navigate(['/admin/posts']);
      }, 3000);
    }, error => {
      this.errors.push(error);
    });
  }
}
