import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCartService} from '../shopping-cart/shopping-cart.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  cartItemsNumber: number;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.cartItemsNumber = this.shoppingCartService.countProducts();
    this.subscription = this.shoppingCartService.productsChanged
      .subscribe(
        () => {
          this.cartItemsNumber = this.shoppingCartService.countProducts();
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
