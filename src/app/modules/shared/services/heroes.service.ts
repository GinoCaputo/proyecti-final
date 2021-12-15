import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe, Response } from '../models/api-models';

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
    {
      _id: '61968dc575e87a4dcd5bfa6f',
      id: '3',
      nombre: 'Daredevil',
      bio: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido" que le sirve como un radar similar al de los murciélagos.',
      img: 'https://drive.google.com/uc?export=view&id=1cfX3smA_DdgUEyfe915WfBO3OPvueYVp',
      casa: 'Marvel',
    },
    {
      _id: '61968dc575e87a4dcd5bfa70',
      id: '4',
      nombre: 'Hulk',
      bio: 'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
      img: 'https://drive.google.com/uc?export=view&id=10Q9WIzJ1tTkHEvsHFLxDT-oGbnpXPGH2',
      casa: 'Marvel',
    },
    {
      _id: '61968dc575e87a4dcd5bfa71',
      id: '5',
      nombre: 'Linterna Verde',
      bio: 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
      img: 'https://drive.google.com/uc?export=view&id=1C4NJgk1xvdg9Tz-07Te1Ai7PZElBt-jq',
      casa: 'DC',
    },
    {
      _id: '61968dc575e87a4dcd5bfa72',
      id: '6',
      nombre: 'Spider-Man',
      bio: 'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un "sentido arácnido", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
      img: 'https://drive.google.com/uc?export=view&id=1qe4JOCsT34lZZziqfxBCP4o1bbVBEz5M',
      casa: 'Marvel',
    },
    {
      _id: '61968dc575e87a4dcd5bfa73',
      id: '7',
      nombre: 'Wolverine',
      bio: 'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
      img: 'https://drive.google.com/uc?export=view&id=13p5w93ROi78MjsRbZ1EbncJc2sThMf0-',
      casa: 'Marvel',
    },
    {
      _id: '619716b8671693b6cded34d8',
      id: '8',
      nombre: 'Thanos',
      bio: 'bio',
      img: 'https://drive.google.com/uc?export=view&id=1cfX3smA_DdgUEyfe915WfBO3OPvueYVp',
      casa: 'Marvel',
    },
    {
      _id: '61a61bf7d5f02151c0a39ebe',
      nombre: 'Robin',
      bio: 'Robin es el alias de varios superhéroes ficticios que aparecen en los cómics estadounidenses publicados por DC Comics. El personaje fue creado originalmente por Bob Kane, Bill Finger y Jerry Robinson, para servir como contraparte menor del superhéroe Batman.',
      img: 'https://drive.google.com/uc?export=view&id=1L-MpKd-T-uSvm061ILhsESS391l1G-58',
      casa: 'DC',
      __v: 0,
    },
    {
      _id: '61ab6b41aea6252ba2f31bdc',
      nombre: 'Samuel T',
      bio: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido" que le sirve como un radar similar al de los murciélagos.',
      img: 'https://drive.google.com/uc?export=view&id=1cfX3smA_DdgUEyfe915WfBO3OPvueYVp',
      casa: 'Marvel',
      __v: 0,
    },
  ];

  constructor(private http: HttpClient) {}

  // filtered: any[] = [];
  // getHeroe(id: number) {
  //   return this.movies[id];
  // }
  // filterHeroes(text: string) {
  //   this.filtered = this.movies.filter((movie) =>
  //     movie.nombre.toLowerCase().includes(text.toLowerCase())
  //   );
  //   console.log(this.filtered);
  // }

  movies$: BehaviorSubject<Heroe[]> = new BehaviorSubject(this.initialMovies);

  getHeroes(): Observable<Response> {
    return this.http.get<Response>(`${environment.baseUrl}personajes`);
  }
  getPeliculas(): Observable<Response> {
    return this.http.get<Response>(`${environment.baseUrl}peliculas`);
  }

  filterHeroes(text: string) {
    const filteredMovies = this.movies$.value.filter((movie) =>
      movie.nombre.toLowerCase().includes(text.toLowerCase())
    );

    this.movies$.next(filteredMovies);
  }

  resetHeroes() {
    this.movies$.next(this.initialMovies);
  }
}
