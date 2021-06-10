import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnimeComponent } from './anime/anime.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharaterListComponent } from './charater-list/charater-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    CharaterListComponent,
    AnimeDetailComponent,
    CharacterDetailComponent,
    CharaterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
