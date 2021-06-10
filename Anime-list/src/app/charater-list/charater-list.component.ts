import { Component, OnInit } from '@angular/core';
import { CHARACTERS } from '../mock-characters';

@Component({
  selector: 'app-charater-list',
  templateUrl: './charater-list.component.html',
  styleUrls: ['./charater-list.component.css']
})
export class CharaterListComponent implements OnInit {

  charaters = CHARACTERS;
  constructor() { }

  ngOnInit(): void {
  }

}
