import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Movie} from '../movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  @Input() movielist !: Movie[];
  @Output() showmovie = new EventEmitter<any>();
  @Output() editmovie = new EventEmitter<any>();
    

  filmDetailId: any = null;

constructor() { }

viewDetail(id:number){
  this.filmDetailId = id;
  this.showmovie.emit(this.filmDetailId);
}
editdetail(id:number){
  this.filmDetailId = id;
  this.editmovie.emit(this.filmDetailId)
}
addItem(event:Event){
  console.log(event)
}
ngOnInit(): void {
}

}
