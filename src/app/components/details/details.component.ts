import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  movie: any;
  constructor(
    private actRoute: ActivatedRoute,
    private heroesSvc: HeroesService
  ) {
    this.actRoute.params.subscribe((params) => {
      // this.movie = this.heroesSvc.getHeroe(params['id']);
      console.log(this.movie);
    });
  }

  ngOnInit(): void {}
}
