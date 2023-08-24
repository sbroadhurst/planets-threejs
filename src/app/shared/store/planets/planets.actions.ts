import { createAction, props } from '@ngrx/store';
import { PlanetModel } from './planets.state';

export const LOAD_PLANET_SUCCESS = '[planet page] load planet success';
export const LOAD_PLANET_FAIL = '[planet page] load planet fail';
export const LOAD_PLANET = '[planet page] load planet';

export const SET_PLANET_QUOTE = '[planet page] load planet quote';

export const loadPlanetSuccess = createAction(
  LOAD_PLANET_SUCCESS,
  props<{ planet: PlanetModel }>()
);
export const loadPlanetFail = createAction(
  LOAD_PLANET_FAIL,
  props<{ errorText: string }>()
);
export const loadPlanet = createAction(LOAD_PLANET, props<{ id: string }>());

export const setPlanetQuote = createAction(
  SET_PLANET_QUOTE,
  props<{ id: string }>()
);
