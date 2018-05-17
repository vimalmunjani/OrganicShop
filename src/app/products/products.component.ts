import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { AppProduct } from '../models/app-product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: AppProduct[] = [];
  filteredProducts: AppProduct[] = [];
  selectedCategory: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {

    productService.getAllProducts().subscribe(p => {
      this.products = p;

      route.queryParamMap.subscribe(params => {
        this.selectedCategory = params.get('category');

        this.filteredProducts = (this.selectedCategory) ?
          this.products.filter(product => product.category === this.selectedCategory) :
          this.products;
      });

    });




  }

  ngOnInit() {
  }

}
