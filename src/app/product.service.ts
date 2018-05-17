import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  addProduct(newProduct) {
    return this.db.list('/products').push(newProduct);
  }

  getAllProducts() {
    return this.db.list('/products');
  }

  getOneProductById(productId) {
    return this.db.object('/products/' + productId);
  }

  updateProduct(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }
}
