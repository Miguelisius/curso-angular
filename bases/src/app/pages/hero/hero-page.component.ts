import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
  imports: [UpperCasePipe],
})


export class HeroPageComponent{
  name = signal('ironman');
  age = signal(10);

  heroDescription = computed(()=>{
    const description = `${this.name()} - ${this.age()}`;
    return description;
  })

  capitalizedName = computed(()=>this.name().toUpperCase())

  constructor(){

  }

  getHeroDescription(){
    return `${this.name()} - ${this.age()}`;
  }

  changeHero(){
    this.name.set("Spiderman");
  }
  changeAge(){
    this.age.set(100);
  }

  resetForm(){
    this.name.set("Ironman");

  }
  Capitalized(){
    return `${this.name().toLocaleUpperCase()}`;
  }

};
