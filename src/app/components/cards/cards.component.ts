import { Component, OnInit } from '@angular/core';
import { HeroesService, Movie } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private heroesSvc: HeroesService) {
    // this.movies = this.heroesSvc.movies;
    this.heroesSvc.getHeroes().subscribe((movies) => {
      this.movies = movies;
    });
  }

  ngOnInit(): void {}

  navigate() {
    console.log('click');
  }
  recibir($event: DatosHijo) {
    console.log('recibido', $event);
  }
}

interface DatosHijo {
  message: string;
  component: string;
}
