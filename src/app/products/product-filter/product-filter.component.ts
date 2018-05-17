import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../category.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories$;

  // tslint:disable-next-line:no-input-rename
  @Input('selectedCategory') selectedCategory;

  constructor(
  private categoryService: CategoryService) {
    this.categories$ = categoryService.getAllCategories();
  }

  ngOnInit() {
  }

}
