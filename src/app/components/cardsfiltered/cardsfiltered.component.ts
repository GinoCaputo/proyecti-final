import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-cardsfiltered',
  templateUrl: './cardsfiltered.component.html',
  styleUrls: ['./cardsfiltered.component.scss'],
})
export class CardsfilteredComponent implements OnInit {
  movies: any[] = [];

  constructor(private heroesSvc: HeroesService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.movies = this.heroesSvc.filtered;
    }, 1500);
  }
}
