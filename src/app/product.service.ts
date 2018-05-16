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
}
