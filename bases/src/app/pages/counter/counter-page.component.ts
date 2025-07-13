import { Component } from "@angular/core";



@Component({
  template:`
  <!--<h1>Hola Mundoo</h1>-->
  <!--<h2>CounterComponent Page</h2>-->
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>

  `,
})
export class CounterPageComponent{
  counter = 10;

  increaseBy(value:number){
    this.counter += value;
  }
}