import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable, of } from 'rxjs';


// injectable decorator allows us to inject HeroService throughout our appliction
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add(`HeroService: Fetched Heroes`);
    return of(HEROES)
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: Fetched with id: ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

