import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  moviesURL = 'https://api.themoviedb.org/3/discover/movie?api_key=6a98bac66a8fa62e25bcf3b221294b7f&page=1&language=es-ES&sort_by=popularity.desc'

 
  constructor(private http: HttpClient) { }

  getMovies() {
      
    return this.http.get<any>(this.moviesURL);
  }
  
}



