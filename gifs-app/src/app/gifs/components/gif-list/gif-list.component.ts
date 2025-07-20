import { GifListItemComponent } from './gif-list-item/gif-list-item.component';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  gifs = input.required<string[]>();
}
