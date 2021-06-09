import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import{Character}from '../character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: Character | undefined;
  
  constructor(
    private route:ActivatedRoute,
    private location:Location
  ) {}

  metoda(){
    
  }
  ngOnInit(): void {
    this.getCharacter();
  }
  getCharacter(): void{
    const id=Number(this.route.snapshot.paramMap.get('id'));

  }
  goBack():void{
    this.location.back();
  }

}
