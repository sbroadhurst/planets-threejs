import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent);

@NgModule({
  // declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  declarations: [],
  // bootstrap: [AppComponent],
})
export class AppModule {}
