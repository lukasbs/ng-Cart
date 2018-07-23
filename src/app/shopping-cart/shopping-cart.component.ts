import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../shared/ingredient.model';
import {ShoppingCartService} from './shopping-cart.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  products: Product[];

  private subscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.products = this.shoppingCartService.getProducts();
    this.subscription = this.shoppingCartService.productsChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
    );
  }

  delete(index: number): void {
    this.shoppingCartService.deleteProduct(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
