import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/store/app/app.state';
import { Router } from '@angular/router';
import {
  PlanetModel,
  PlanetState,
  planetInitialState,
} from 'src/app/shared/store/planets/planets.state';
import { loadPlanet } from 'src/app/shared/store/planets/planets.actions';
import {
  getPlanet,
  getPlanetInfo,
} from 'src/app/shared/store/planets/planets.selector';
import { getRouterInfoId } from 'src/app/shared/store/router/router.selector';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
})
export class TextAreaComponent implements OnInit {
  constructor(private store: Store<AppStateModel>, private router: Router) {}

  planetInfo: PlanetState = planetInitialState;
  planet!: PlanetModel;
  planetId: string = '';

  ngOnInit(): void {
    // get which planet or home from the router
    this.store.select(getRouterInfoId).subscribe((id) => {
      this.planetId = id;
    });
    this.getPlanetInformation();
  }

  getPlanetInformation(): void {
    // if at the 'home' page set info to the initial state
    if (this.planetId == 'home') {
      this.planetInfo = planetInitialState;
    } else {
      // get the information for that planet by id
      this.store.dispatch(loadPlanet({ id: this.planetId }));
      this.store.select(getPlanetInfo).subscribe((info: any) => {
        this.planetInfo = info;
      });
    }
  }

  selectNewPlanet(id: string): void {
    this.planetId = id;
    this.getPlanetInformation();
  }
}
