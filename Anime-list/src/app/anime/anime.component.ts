import { Component, OnInit } from '@angular/core';
import {Character}from '../character';
import{CharacterService}from '../character.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  character: Character[]=[];
  constructor(private characterService :CharacterService) { }

  ngOnInit()  {
    this.getCharacter();
  }
getCharacter():void{
  this.characterService.getCharacters().subscribe(character=>this.character.slice(0,5))
}


}
