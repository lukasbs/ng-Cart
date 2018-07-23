import {Component} from '@angular/core';
import {Product} from '../shared/ingredient.model';
import {ShoppingCartService} from '../shopping-cart/shopping-cart.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})

export class ShoppingListComponent {

  products: string[] = [
    'Jabłko', 'Pomarańcz', 'CEBULA', 'BURAK'
  ];

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCart(form: NgForm, index: number) {
    if (form.value.amount > 0) {
      this.shoppingCartService.addProduct(new Product(this.products[index], form.value.amount));
    }
  }
}
