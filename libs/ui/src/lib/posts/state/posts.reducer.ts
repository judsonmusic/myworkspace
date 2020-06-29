import { createReducer, on } from '@ngrx/store';
import { ApiError, ApiSuccess } from './posts.actions';

export interface PostsState {
  error: any;
  data: any;
}

const initialState: PostsState = {
  error: null,
  data: null,
};

export const rootReducer = createReducer(
  initialState,
  on(ApiError, (state, action) => ({ error: action.error, data: state.data })),
  on(ApiSuccess, (state, action) => ({ data: action.data, error: null }))
);
