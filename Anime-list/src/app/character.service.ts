import { Injectable } from '@angular/core';
import{Observable,of} from 'rxjs';
import{Character} from './character';
import{CHARACTERS}from './mock-characters';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  getCharacters():Observable<Character[]> {
    const characters=of(CHARACTERS);
    return characters;
  }
  getCharacter(id:number): Observable<Character>{
    const character=CHARACTERS.find(h=> h.id==id)!;
    return of(character);
  }
}
