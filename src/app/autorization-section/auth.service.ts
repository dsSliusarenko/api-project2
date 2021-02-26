import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthInterface} from './auth.interface';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {

  private apiUrl: string = environment.apiUrl + '/auth/local';
  private registrationPath: string = environment.apiUrl + '/auth/local/register';
  currentUserSubject: BehaviorSubject<AuthInterface>;
  isAuth = false;

  constructor(private  http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<AuthInterface>(JSON.parse(localStorage.getItem('currentUser')));
  }

  // this getter allow us to check is user authenticated or not
  get isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  // login
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
    });
  }

  // registration
  registration(email: string, username: string, password: string): Observable<AuthInterface> {
    return this.http.post<AuthInterface>(this.registrationPath,
      {
        email,
        username,
        password,
      }
    );
  }

  signOut(): void {
    localStorage.removeItem('currentUser');
    this.isAuth = false;
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }

  getUserLogin(): string {
    return JSON.parse(localStorage.getItem('currentUser')).user.email;
  }

  getUserName(): string {
    return JSON.parse(localStorage.getItem('currentUser')).user.username;
  }
}
