import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import{ HttpClientModule } from '@Angular/common/http';
import{ HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import{ InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LoggingComponent } from './logging/logging.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,   
    MovieDetailComponent,
    LoggingComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, {dataEncapsulation : false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
