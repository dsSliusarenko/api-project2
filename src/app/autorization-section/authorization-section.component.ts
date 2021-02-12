import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';
import {AuthInterface} from './auth.interface';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-authorization-section',
  templateUrl: './authorization-section.component.html',
  styleUrls: ['./authorization-section.component.css']
})
export class AuthorizationSectionComponent implements OnInit {

  isUserLoggedIn$: Subject<AuthInterface>;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isUserLoggedIn$ = this.authService.currentUserSubject;
  }

  onSubmit(authForm: NgForm): void {
    if (authForm.invalid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;


    this.authService.signIn(email, password);

    authForm.reset();
  }

  logOut(): void {
    this.authService.signOut();
  }

}
