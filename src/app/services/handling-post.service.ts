import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../interfaces/post.interface';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HandlingPostService {

  private apiUrl: string = environment.apiUrl + '/posts';
  private apiUrlPost;

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getSinglePost(id: number): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  sendPost(content: string,
           description: string,
           // image?: any,
           title: string,
  ): Observable<Post[]> {
    return this.http.post<Post[]>(this.apiUrl, {content, description, title});
  }

  // attention to this.api. Because it can take certain path, like .../posts/id => posts/4
  editPost(id: number, body: Post): Observable<Post[]> {
    // console.log(this.apiUrlPost);
    this.apiUrlPost = this.apiUrl + '/' + id;
    return this.http.put<Post[]>(this.apiUrlPost, body);
  }
}
