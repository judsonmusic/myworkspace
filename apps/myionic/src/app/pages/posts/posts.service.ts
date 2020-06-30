/* import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const POSTS_SERVICE = new InjectionToken<AbstractPostsService>(
  'POSTS_SERVICE'
);

export abstract class AbstractPostsService {
  abstract getAll(): Observable<any>;
} */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAll() {
    // returns an obserable by default.
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
