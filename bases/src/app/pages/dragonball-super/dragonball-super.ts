import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonballService } from '../../services/dragonball.service';

interface Character{
  id:number,
  name:string,
  power:number,
}


@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuper {

  public dragonballService = inject(DragonballService);



}
