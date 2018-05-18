import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  createCart() {
    return this.db.list('/shopping-carts').push({
        dateCreated : new Date().getTime()
    });
  }

  private getCart(cartId) {
    return this.db.object('/shopping-carts/' + cartId);
  }

  private getOrCreateCart() {
    const cartId = localStorage.getItem('cartId');

    if (!cartId) {
      this.createCart()
      .then(result => {
        localStorage.setItem('cartId', result.key);
        return this.getCart(result.key);

      });
    } else {
      return this.getCart(cartId);
    }
  }

}
