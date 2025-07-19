import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component'),
  },
  {
    path: 'trending',
    loadComponent: () => import('./gifs/pages/trending/trending.component'),
  },
  {
    path: 'search',
    loadComponent: () => import('./gifs/pages/search-pages/search-pages.component'),
  },
  {
    path:'**',
    redirectTo:'dashboard',
  },



];
