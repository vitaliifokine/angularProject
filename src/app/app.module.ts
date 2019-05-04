import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { PolarityComponent } from './polarity/polarity.component';
import { TemperamentComponent } from './temperament/temperament.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    PolarityComponent,
    TemperamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
