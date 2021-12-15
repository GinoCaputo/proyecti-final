import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss'],
})
export class SearchfieldComponent implements OnInit {
  search: string = '';
  clear: boolean = false;

  constructor(private heroes: HeroesService) {}

  ngOnInit(): void {}

  filter($event: any) {
    $event.preventDefault();
    this.heroes.filterHeroes(this.search.trim());
    this.search = '';
    this.clear = true;
  }

  onClear() {
    this.heroes.resetHeroes();
    this.clear = false;
  }
}
