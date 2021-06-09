import { Component, OnInit } from '@angular/core';
import {Character}from '../character';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  character: Character[]=[];
  constructor() { }

  ngOnInit()  {
    this.getCharacter();
  }
getCharacter():void{
  
}


}
