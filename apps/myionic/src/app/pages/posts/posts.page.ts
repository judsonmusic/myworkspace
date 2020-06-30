import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiGetMockData } from './state/posts.actions';
import { PostsState } from './state/posts.reducer';
import { getStateError, getStateSelectedData } from './state/posts.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  error$: Observable<string>;
  data$: Observable<string>;
  JSON = JSON;
  constructor(private store: Store<{ postsState: PostsState }>) {
    this.error$ = this.store.select(getStateError);
    this.data$ = this.store.select(getStateSelectedData);
  }

  ngOnInit() {
    this.store.dispatch(ApiGetMockData({ id: 'randomId' }));
  }
}
