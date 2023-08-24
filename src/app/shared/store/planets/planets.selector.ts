import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlanetState } from './planets.state';

const getPlanetState = createFeatureSelector<PlanetState>('planet');

export const getPlanet = createSelector(getPlanetState, (state) => {
  return state.planet;
});

export const getPlanetInfo = createSelector(getPlanetState, (state) => {
  return state;
});
