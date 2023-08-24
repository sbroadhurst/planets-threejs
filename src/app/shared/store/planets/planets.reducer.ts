import { createReducer, on } from '@ngrx/store';
import { PlanetModel, planetInitialState } from './planets.state';
import {
  loadPlanet,
  loadPlanetFail,
  loadPlanetSuccess,
} from './planets.actions';

const _planetReducer = createReducer(
  planetInitialState,
  on(loadPlanet, (state) => {
    return {
      ...state,
    };
  }),
  on(loadPlanetSuccess, (state, payload) => {
    const newState = { ...state, planet: payload.planet };
    return {
      ...newState,
    };
  }),
  on(loadPlanetFail, (state, payload) => {
    return {
      ...state,
      errorMessage: payload.errorText,
    };
  })
);

export function planetReducer(state: any, payload: any) {
  return _planetReducer(state, payload);
}
