import {Component} from '@angular/core';
import {AuthService} from '../autorization-section/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isUserAuth: Observable<any>;

  constructor(private authService: AuthService) {
    this.isUserAuth = this.authService.currentUserSubject;
  }

  signOut(): void {
    this.authService.signOut();
  }
}
