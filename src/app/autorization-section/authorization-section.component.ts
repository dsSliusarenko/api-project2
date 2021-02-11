import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-authorization-section',
  templateUrl: './authorization-section.component.html',
  styleUrls: ['./authorization-section.component.css']
})
export class AuthorizationSectionComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(authForm: NgForm): void {
    if (!authForm.valid) {
      return;
    }
    // console.log(authForm.value);
    const email = authForm.value.email;
    const password = authForm.value.password;


    this.authService.signIn(email, password).subscribe(
      respData => {
        console.log(respData);
      }, error => {
        console.log(error);
      });
    authForm.reset();
  }

}
