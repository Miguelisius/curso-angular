import { DragonballSuper } from './pages/dragonball-super/dragonball-super';
import { Routes } from '@angular/router';
import {HeroPageComponent} from './pages/hero/hero-page.component';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { Dragonball } from './pages/dragonball/dragonball';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: Dragonball,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuper,
  },
  {
    path:'**',
    redirectTo: '',
  }


];
