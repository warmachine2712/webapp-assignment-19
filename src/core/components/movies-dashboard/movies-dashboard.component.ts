import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.css']
})
export class MoviesDashboardComponent implements OnInit, OnDestroy {

  constructor(private http: HttpClient,
    private Router: Router) { }
  ngOnDestroy(): void {
    localStorage.clear();
  }

  moviesCollection: any = []
  ngOnInit(): void {
    // 
    this.fetchMovies()
  }

  fetchMovies() {
    this.http.get('https://api.tvmaze.com/shows').subscribe((Response) => {
      console.log(Response);
      this.moviesCollection = Response
      this.filterAllGenere(Response)
    })
  }

  filterAllGenere(Response: any) {
    let genere: any = []
    Response.forEach((movie: any) => {
      let exist = false;
      for (let i = 0; i < genere.length; i++) {
        if (genere[i].genereName == movie.genres[0]) {
          exist = true;
          genere[i].speceficGenereCollection.push(movie);
        }
      }
      if (!exist) {
        genere.push({ genereName: movie.genres[0], speceficGenereCollection: [movie] })
      }
    });
    console.log(genere);
    this.moviesCollection = genere
  }

  showMovieDetails(movie: any) {
    console.log("Routing to details");
    this.Router.navigate(['details'], { state: movie });
  }

  timer: any
  getMoviesWithInput(event: any) {
    if (!event.target.value) {
      clearTimeout(this.timer)
      this.fetchMovies()
      return;
    }
    console.log(event.target.value);
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      this.fetchMoviesWithSearchKey(event.target.value)
    }, 1000)
  }

  fetchMoviesWithSearchKey(key: string) {
    this.http.get('http://api.tvmaze.com/search/shows', {
      params: {
        q: key
      },
      observe: 'response'
    })
      .subscribe((response: any) => {
        if (response.status === 200 && response.statusText === "OK") {
          console.log(response);
          let movies: any = []
          response.body?.forEach((singleMovie: any) => {
            movies.push({ ...singleMovie.score, ...singleMovie.show })
          });
          this.filterAllGenere(movies)
        }
      })
  }
}
