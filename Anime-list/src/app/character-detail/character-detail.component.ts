import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import{Character}from '../character';
import { CharacterService } from '../character.service';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  @Input() character: Character | undefined;
  
  constructor(
    private route:ActivatedRoute,
    private characterService:CharacterService,
    private location:Location
  ) {}

  metoda(){
    
  }
  ngOnInit(): void {
    this.getCharacter();
  }
  getCharacter(): void{
    const id=Number(this.route.snapshot.paramMap.get('id'));
   // this.characterService.getCharacter(id).subscribe(character=>this.character=character);
  }
  goBack():void{
    this.location.back();
  }

}
