import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService{
  createDb(){
    alert (3);
    const movies = [
      { id:1, name:"movie1", description:"güzelFilm"},
      { id:2, name:"movie2", description:"güzelFilm"},
      { id:3, name:"movie3", description:"güzelFilm" }
  ];
  alert(movies[1]);
return {movies};
}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  alert (5);
}

  constructor() { }
}
