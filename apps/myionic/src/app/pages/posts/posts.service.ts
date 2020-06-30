import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiGetMockData } from './state/posts.actions';
import { PostsState } from './state/posts.reducer';
import { getStateError, getStateSelectedData } from './state/posts.selectors';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    private http: HttpClient,
    private store: Store<{ postsState: PostsState }>
  ) {}

  getPosts() {
    this.store.dispatch(ApiGetMockData({ id: 'randomId' }));
    return this.store.select(getStateSelectedData);
  }

  getErrors() {
    return this.store.select(getStateError);
  }

  getAll() {
    // returns an obserable by default.
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
