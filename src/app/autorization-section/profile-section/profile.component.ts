import {Component} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})

export class ProfileComponent {
  //
  login;
  userName;

  constructor(private authService: AuthService) {
    this.login = authService.getUserLogin();
    this.userName = authService.getUserName();
  }

  // logOut(): void {
  //   this.authService.signOut();
  // }
}
