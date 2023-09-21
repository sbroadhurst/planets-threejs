import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/store/app/app.state';
import { Router } from '@angular/router';
import { getRouterInfoId } from 'src/app/shared/store/router/router.selector';
import { EarthComponent } from '../earth/earth.component';
import { SaturnComponent } from '../saturn/saturn.component';
import { VenusComponent } from '../venus/venus.component';
import { MarsComponent } from '../mars/mars.component';
import { PlutoComponent } from '../pluto/pluto.component';
import { NeptuneComponent } from '../neptune/neptune.component';
import { MercuryComponent } from '../mercury/mercury.component';
import { UranusComponent } from '../uranus/uranus.component';
import { JupiterComponent } from '../jupiter/jupiter.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    EarthComponent,
    SaturnComponent,
    VenusComponent,
    MarsComponent,
    PlutoComponent,
    NeptuneComponent,
    MercuryComponent,
    UranusComponent,
    JupiterComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private store: Store<AppStateModel>, private router: Router) {}

  planetId: string = '';

  ngOnInit(): void {
    // get which planet or home from the router
    this.store.select(getRouterInfoId).subscribe((id) => {
      this.planetId = id;
    });
  }
}
