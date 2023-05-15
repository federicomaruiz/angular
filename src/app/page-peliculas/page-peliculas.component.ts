import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-page-peliculas',
  templateUrl: './page-peliculas.component.html',
  styleUrls: ['./page-peliculas.component.css']
})
export class PagePeliculasComponent implements OnInit {

  myMovies: any
  constructor(private moviesService: MovieServiceService){

  }
  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(data => {
      console.log(data);
      this.myMovies = data.results;
    })
  }

}
