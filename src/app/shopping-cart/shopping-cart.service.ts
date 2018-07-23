import {Product} from '../shared/ingredient.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class ShoppingCartService {
  productsChanged = new Subject<Product[]>();
  private products: Product[] = [];

  getProducts(): Product[] {
    return this.products.slice();
  }

  addProduct(product: Product): void {
    let found;
    for (const item of this.products) {
      if (item.name === product.name) {
        item.amount += product.amount;
        found = true;
      }
    }
    if (!found) {
      this.products.push(product);
    }
    this.productsChanged.next(this.products.slice());
  }

  deleteProduct(index: number): void {
    this.products.splice(index, 1);
    this.productsChanged.next(this.products.slice());
  }

  countProducts(): number {
    let sum = 0;
    for (const product of this.products) {
      sum += product.amount;
    }
    return sum;
  }
}
