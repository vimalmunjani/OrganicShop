import { Component, OnInit, Input } from '@angular/core';

import { AppProduct } from '../../models/app-product';
import { ShoppingCartService } from '../../shopping-cart.service';
import { slide } from '../../animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  animations : [slide]
})
export class ProductCardComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('product') product: AppProduct;
  // tslint:disable-next-line:no-input-rename
  @Input('show-actions') showActions = true;


  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: AppProduct) {

  }

  ngOnInit() {
  }

}
