import { createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';

const _appReducer = createReducer(AppState);

export function appReducer(state: any, action: any) {
  return _appReducer(state, action);
}
