import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/modules/shared/services/heroes.service';
import { Heroe, Response } from 'src/app/shared/models/api-models';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroesSvc: HeroesService) {
    this.heroesSvc.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
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
