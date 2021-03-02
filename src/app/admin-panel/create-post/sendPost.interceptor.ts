import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class SendPostInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = JSON.parse(localStorage.getItem('currentUser')).jwt;
    const clone = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${jwt}`)
    });
    return next.handle(clone);
  }
}
