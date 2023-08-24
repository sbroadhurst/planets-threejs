import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
// import { bootstrapApplication } from '@angular/platform-browser';

// bootstrapApplication(AppComponent);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, StoreModule.forRoot({}, {}), StoreRouterConnectingModule.forRoot()],
  providers: [],
  // declarations: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
