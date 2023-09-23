import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppReducers } from './shared/store/app/app.reducers';
import CustomSerializer from './shared/store/router/customSerializer';
import { EffectsModule } from '@ngrx/effects';
import { PlanetEffects } from './shared/store/planets/planets.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      name: 'Planets App',
    }),
    StoreModule.forRoot(AppReducers, {}),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer }),
    EffectsModule.forRoot([PlanetEffects]),
  ],
  providers: [],
  // declarations: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
