import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  movies: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor() { }

  ngOnInit(): void {
  }

}
