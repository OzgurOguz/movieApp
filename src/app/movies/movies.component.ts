import { Component } from '@angular/core';
import { Movie } from "../movie";
import { MovieService } from '../movie.service';

@Component
    ({
        selector: 'movies', //#movies-> id .movies-> class  movies ->> etiket
        //template: '<h2>Movies</h2>'
        templateUrl: 'movies.component.html',
        styles:
            [`
        h2
        {
            color:blue;
        }
    `]
    })
export class MoviesComponent {
    title = 'Movie List';

    movies: Movie[];
    //  movies = ['movie 1' , 'movie 2', 'movie 3'];

    getTitle() { return this.title };

    selectedMovie: Movie = null;

    constructor(private movieService: MovieService) {
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getMovies();
    }

    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }

    getMovies(): void {

        this.movieService.getMovies()
            .subscribe(movies => this.movies = movies)
    }
}