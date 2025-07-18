import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';

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


  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power:9001},
    { id: 2, name: 'Vegeta', power:8000},

  ]);

  addCharacter(character: Character){
    this.characters.update(
      (list) => [... list, character]
    );
  }

}
