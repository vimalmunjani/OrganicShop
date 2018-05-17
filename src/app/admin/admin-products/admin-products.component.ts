import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { AppProduct } from '../../models/app-product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: AppProduct[];
  filteredProducts: AppProduct[];
  constructor(private productService: ProductService) {
   productService.getAllProducts().subscribe(p => {
     this.products = this.filteredProducts = p;
   });
   console.log(this.products);
   }


   filterSearch(query: string) {

    console.log(query);
    this.filteredProducts = (query) ?
     this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
     this.products;

     console.log(this.filteredProducts);

   }
  ngOnInit() {
  }

}
