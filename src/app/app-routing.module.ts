import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ModelImportComponent } from './components/model-import/model-import.component';

import { MainComponent } from './components/planets/main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'planets/home' },
  { path: 'imports', component: ModelImportComponent },
  { path: 'planets/:id', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
