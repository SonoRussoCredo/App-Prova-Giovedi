import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import {Movie} from '../movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
   @Input() movie:any;
   @Output() showmovie = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
