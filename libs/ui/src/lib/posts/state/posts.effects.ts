import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { AbstractPostsService, POSTS_SERVICE } from '../posts.service';
import * as ACTIONS from './posts.actions';

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions,
    @Inject(POSTS_SERVICE) private postsService: AbstractPostsService
  ) {}

  // effect from simulating an API call success
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTIONS.ApiGetMockData),
      tap(() => {
        console.log('Data fetch in queue');
      }),
      mergeMap((action) => {
        return this.postsService.getAll().pipe(
          map((res) => ACTIONS.ApiSuccess({ data: res })),
          catchError((error) => of(ACTIONS.ApiError({ error }))),
          tap(() => {
            console.log('Get Data Finished');
          })
        );
      })
    )
  );
}
