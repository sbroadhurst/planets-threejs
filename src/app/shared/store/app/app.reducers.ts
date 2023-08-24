import { routerReducer } from '@ngrx/router-store';
import { appReducer } from './app.reducer';
import { planetReducer } from '../planets/planets.reducer';

export const AppReducers = {
  app: appReducer,
  router: routerReducer,
  planet: planetReducer,
};
