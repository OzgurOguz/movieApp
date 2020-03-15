import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

movies : Movie[]=[];
movieLength:Number = 3;

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }
  getMovies():void{
    
    this.movieService.getMovies()
                  .subscribe(movies => this.movies = movies.slice(0,2));
    // this.movieLength = movies.length;
    }
  

}
