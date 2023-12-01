import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  searchText:any;
  hours: Number;
  minutes: Number;
  seconds: Number;
  constructor(private productsService: ProductsService) { }
  
  ngOnInit() {
    this.getProducts();
    this.setCountdown();
  }
  
  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => this.products = products)
  }
  
  setCountdown() {
    let end = new Date().setHours(23,59,59,999);
    setInterval(function() {
      let now = new Date().getTime();
      let distance = end - now;
      
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + 1);
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      document.getElementById('hours').innerHTML = hours.toString();
      document.getElementById('minutes').innerHTML = minutes.toString();
      document.getElementById('seconds').innerHTML = seconds.toString();
    }, 1000);
  }
}
