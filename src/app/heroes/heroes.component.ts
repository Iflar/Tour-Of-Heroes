import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };

  heroes: Hero[] = [];

  selectedHero?: Hero;

  

  constructor(private heroService: HeroService){}

  /*
  While this method (getHeroes) dosn't return anything itself, it does set the property'heroes' array values in this class
    equal to the array values retrieved from the hero service.
  Old method
  --
  getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
  --
  }
  */

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
  

  onSelect(hero: Hero): void{
     this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
