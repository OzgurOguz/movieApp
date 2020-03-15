import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@Angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

//private apiMoviesUrl = 'api/movies';      //bu apiyi yayınlayamıyorum

  constructor(private loggingService : LoggingService, private http : HttpClient) { }

  getMovies() : Observable< Movie[]>
  {
    
    this.loggingService.add("MovieService: listing movieMovies");

    return of (Movies);

    //return this.http.get<Movie[]>(this.apiMoviesUrl);
  }

  getMovie(id:number):Observable<Movie>
  {
    this.loggingService.add('MovieService: get detaik by id=' + id);
    return of(Movies.find(movie => movie.id === id)); 
   //return this.http.get<Movie>(this.apiMoviesUrl + '/'+id);

  }
}
