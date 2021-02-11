import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthInterface} from './auth.interface';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthService {

  private apiUrl: string = environment.apiUrl + '/auth/local';

  constructor(private  http: HttpClient) {
  }

  signIn(email: string, password: string): Observable<AuthInterface> {
    return this.http.post<AuthInterface>(
      this.apiUrl,
      {
        identifier: email,
        password,
      }
    );
  }
}
