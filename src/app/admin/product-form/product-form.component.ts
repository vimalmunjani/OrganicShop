import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};
  productId;
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {

    this.categories$ = categoryService.getCategories();

     this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.productService.getOneProductById(this.productId)
        .take(1)
        .subscribe(p => {
          this.product = p;
        });
    }
  }


  saveProduct(newProduct) {

    if (this.productId) {
      this.productService.updateProduct(this.productId, this.product);
    } else {
      this.productService.addProduct(newProduct);
    }
    this.router.navigate(['/admin/products']);
  }

  deleteProduct() {

    console.log('Delete called');

    if (!confirm('Are you sure you want to delete this Product?')) {
    } else {
      this.productService.deleteProduct(this.productId);
      this.router.navigate(['/admin/products']);
    }
  }

  ngOnInit() {
  }

}
