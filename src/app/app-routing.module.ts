import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent }      from './home-page/home-page.component';
import { SetupComponent } from './setup/setup.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'setup', component: SetupComponent }
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routingComponents = [HomePageComponent, SetupComponent]