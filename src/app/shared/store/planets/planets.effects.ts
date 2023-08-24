import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PlanetService } from 'src/app/services/planet.service';
import { catchError, exhaustMap, map, of } from 'rxjs';
import {
  LOAD_PLANET,
  loadPlanetFail,
  loadPlanetSuccess,
} from './planets.actions';
import { PlanetModel } from './planets.state';

@Injectable()
export class PlanetEffects {
  constructor(private action$: Actions, private planetService: PlanetService) {}

  planet = createEffect(() =>
    this.action$.pipe(
      ofType(LOAD_PLANET),
      exhaustMap((action: any) => {
        return this.planetService.getPlanet(action.id).pipe(
          map((data) => {
            const quote = this.planetService.getPlanetQuote(action.id);
            data = { ...data, quote: quote.quote, quotee: quote.quotee };
            return loadPlanetSuccess({ planet: data as PlanetModel });
          }),
          catchError((error) =>
            of(loadPlanetFail({ errorText: error.message }))
          )
        );
      })
    )
  );
}
