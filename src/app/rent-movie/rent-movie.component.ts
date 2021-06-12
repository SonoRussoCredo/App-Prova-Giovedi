import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rent-movie',
  templateUrl: './rent-movie.component.html',
  styleUrls: ['./rent-movie.component.css']
})
export class RentMovieComponent implements OnInit {
  title : string = 'Noleggia un film'
  title2:string = "USD currency"
  quantity:number = 0;
  price:number = 14.99;
  discount:number = 20;
  totalUSD = 0;
  total:number = 0;
  totaleUSD:number = 0;
  dollars = 0;
  constructor() { }
  calculate(q:any){
    let subtotal = q * this.price
    let totaldiscount =subtotal * this.discount / 100
    this.total = subtotal - totaldiscount
    this.totaleUSD = this.total
  }
convertCurrency(value){
 
  this.totalUSD = value* 1.22;
}
  ngOnInit(): void {
  }

}
