import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  movies: any[] = [];

  constructor(private heroesSvc: HeroesService) {
    this.movies = this.heroesSvc.movies;
  }

  ngOnInit(): void {}

  navigate() {
    console.log('click');
  }
}
