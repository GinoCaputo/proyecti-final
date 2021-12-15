import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe, Movie, Response } from '@app/models/api-models';

@Injectable()
export class HeroesService {
  initialMovies: Heroe[] = [
    {
      _id: '61968dc575e87a4dcd5bfa6d',
      id: '1',
      nombre: 'Aquaman',
      bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'https://drive.google.com/uc?export=view&id=1L-MpKd-T-uSvm061ILhsESS391l1G-58',
      casa: 'DC',
    },
  ];

  constructor(private http: HttpClient) {
    this.getPeliculas();
  }

  // filtered: any[] = [];
  // getHeroe(id: number) {
  //   return this.heroes$.value[id];
  // }
  // filterHeroes(text: string) {
  //   this.filtered = this.movies.filter((movie) =>
  //     movie.nombre.toLowerCase().includes(text.toLowerCase())
  //   );
  //   console.log(this.filtered);
  // }

  heroes$: BehaviorSubject<Heroe[]> = new BehaviorSubject(this.initialMovies);

  getHeroes(): Observable<Heroe[]> {
    return this.heroes$.asObservable();
  }
  getPeliculas() {
    this.http
      .get<Response>(`${environment.baseUrl}personajes`)
      .subscribe((resp) => {
        console.log(resp);
        this.heroes$.next(resp.data as Heroe[]);
      });
  }

  filterHeroes(text: string) {
    const filteredMovies = this.heroes$.value.filter((movie) =>
      movie.nombre.toLowerCase().includes(text.toLowerCase())
    );
    console.log(text, filteredMovies);

    this.heroes$.next([]);
    // this.heroes$.next(filteredMovies);
  }

  resetHeroes() {
    // this.getPeliculas();
  }
}
