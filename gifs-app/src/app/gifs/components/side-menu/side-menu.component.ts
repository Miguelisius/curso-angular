import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenunOptionsComponent } from '../side-menun-options/side-menun-options.component';
import { SideMenuHeaderComponent } from '../side-menu-header/side-menu-header.component';

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenunOptionsComponent, SideMenuHeaderComponent],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent { }
