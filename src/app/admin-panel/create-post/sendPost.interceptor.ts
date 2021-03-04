import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class SendPostInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
// REFACTOR ME
    if (localStorage.getItem('currentUser')) {
      const jwt = JSON.parse(localStorage.getItem('currentUser')).jwt;
      req = req.clone({
        headers: req.headers.append('Authorization', `Bearer ${jwt}`)
      });
    }
    return next.handle(req);
  }
}
