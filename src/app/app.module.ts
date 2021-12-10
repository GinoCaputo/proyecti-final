import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './components/details/details.component';
import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { CardsComponent } from './components/cards/cards.component';
import { UpperCasePipe } from '@angular/common';
import { CardsfilteredComponent } from './components/cardsfiltered/cardsfiltered.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    DetailsComponent,
    SearchfieldComponent,
    CardsComponent,
    CardsfilteredComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
