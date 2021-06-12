import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  @Input() movie: any;
  @Output() movieupdate = new EventEmitter<any>();
  mymovie:any;

  constructor() { }

  resetMovie(){
    this.mymovie = Object.assign({}, this.movie);
  }
  update(){
    this.movieupdate.emit(this.mymovie);
  }

  ngOnInit(): void {
    this.resetMovie()
  }

}

