import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthInterface} from './auth.interface';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {

  private apiUrl: string = environment.apiUrl + '/auth/local';
  currentUserSubject: BehaviorSubject<AuthInterface>;

  constructor(private  http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<AuthInterface>(JSON.parse(localStorage.getItem('currentUser')));
  }

  signIn(email: string, password: string): void {
    this.http.post<AuthInterface>(
      this.apiUrl,
      {
        identifier: email,
        password,
      }
    ).subscribe(currentUser => {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      this.currentUserSubject.next(currentUser);
      // TODO: hint task 4
      if (currentUser.jwt) {
        this.router.navigate(['/create']);
      }
    });
  }

  signOut(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next({} as AuthInterface);
    this.router.navigate(['/']);
  }
}
