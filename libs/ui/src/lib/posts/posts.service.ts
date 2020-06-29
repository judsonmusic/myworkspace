import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const POSTS_SERVICE = new InjectionToken<AbstractPostsService>(
  'POSTS_SERVICE'
);

export abstract class AbstractPostsService {
  abstract getAll(): Observable<any>;
}
