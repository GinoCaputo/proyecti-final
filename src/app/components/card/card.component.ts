import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() movie: any = {};
  @Input('index') i: number = 0;
  @Output('enviardatos') enviar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  avisarleAlPapa() {
    console.log('click hijo');
    this.enviar.emit({
      message: 'Mensaje al padre desde el hijo again',
      component: 'CardComponent',
    });
  }
}
