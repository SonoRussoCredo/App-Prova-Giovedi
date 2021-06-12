import { Component } from '@angular/core';
import {Movie} from './movie';
import {MOVIES} from './mock-movies';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  movies: Array<Movie> = MOVIES
  title = 'nomeprogetto';
  selected = 'list';
  selectedMovie:any;
  welcome:string="Welcome from parent";
  cambia(type){
     this.selected = type;
  }

  findMovie(id:any){
    var movie;
    for (let i =0; i < this.movies.length; i++){
   if(id===this.movies[i].id){
     movie=this.movies[i];
   }
    }
    return movie
  }

/*
  updateMovie(movie:any){
    console.log(movie);
    let i = this.movies.findIndex((value) => {
      return value.id===movie.id
    })
  }
*/

updateMovie(movie:any){
  console.log(movie)
  let i = this.movies.findIndex((value) => value.id === movie.id)
  for(let prop in movie){
    this.movies[i][prop] = movie[prop];
  }
}


  editDetail(movieId: any){
    console.log(movieId)
    this.selectedMovie = this.movies.find((value) =>{
      return value.id === movieId
    });
     this.selected = 'edit'
  }

  viewDetail(movieId:any){
    console.log(movieId)
    this.selectedMovie = this.movies.find((value) => {
      return value.id === movieId
    });
    this.selected = 'detail'
  }

}
