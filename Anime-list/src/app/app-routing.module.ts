import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{AnimeComponent}from './anime/anime.component';
import{AnimeDetailComponent}from './anime-detail/anime-detail.component';
import{CharacterDetailComponent}from './character-detail/character-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {path:'',redirectTo: '/anime',pathMatch:'full'},
  {path:'anime',component:AnimeComponent, pathMatch:'full'},
  {path:'anime/:id',component:AnimeDetailComponent},
  
  {path:'character-detail',component:CharacterDetailComponent}
]


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
