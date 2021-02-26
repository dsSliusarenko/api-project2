import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: 'create-post.component.html',
  styleUrls: ['create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

}
