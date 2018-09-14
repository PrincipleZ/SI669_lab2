import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.ts';
import { HEROES } from '../mock-heroes.ts';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;
  selectedHero: Hero;
  byAlpha = true;
  buttonText = "Order Alphabetically";

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  onClickSort(): void{
    //Run sort here
    if (this.byAlpha){
        this.heroes.sort(function (a,b){return a.name[0] > b.name[0]});
        this.buttonText = "Order By id";
    } else {
        this.heroes.sort(function (a,b){return a.id - b.id});
        this.buttonText = "Order Alphabetically";
    }
    this.byAlpha = !this.byAlpha;
  }
}

