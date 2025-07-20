import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuOptions{
  label: string;
  subLabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menun-options',
  imports: [RouterLink],
  templateUrl: './side-menun-options.component.html',
})
export class SideMenunOptionsComponent {

  menuOptions: MenuOptions [] =[
    {
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route:'/dashboard/trending',
      icon:'fa-solid fa-chart-line',
    },
    {
      label: 'Buscador',
      subLabel: 'Buscar Gifs',
      route:'/dashboard/search',
      icon:'fa-solid fa-magnifying-glass',
    },
  ]

}
