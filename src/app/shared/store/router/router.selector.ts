import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateModel } from './customSerializer';
import { RouterReducerState } from '@ngrx/router-store';

const getRouterState =
  createFeatureSelector<RouterReducerState<RouterStateModel>>('router');

export const getRouterInfoId = createSelector(getRouterState, (state) => {
  return state.state.params['id'];
});
