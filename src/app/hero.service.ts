import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  this.messageService.add('HeroService: fetched heroes')
  return heroes;
}


  /* old method:

  getHeroes(): Hero[]{
    return HEROES;
  }

  */

  constructor(private messageService: MessageService) { }
}
