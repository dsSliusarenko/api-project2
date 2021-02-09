import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../interfaces/post.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HandlingPostService {
  // response: any;
  // posts: Post[] = [];

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://ngx-training.com/posts/');
  }

  getSinglePost(id: number): Observable<Post> {
    return this.http.get<Post>('https://ngx-training.com/posts/' + id);
  }

}
