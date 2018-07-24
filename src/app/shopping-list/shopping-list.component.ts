import {Component} from '@angular/core';
import {Product} from '../shared/ingredient.model';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as ShoppingCartActions from '../shopping-cart/store/shopping-cart.actions';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})

export class ShoppingListComponent {

  products: string[] = [
    'Jabłko', 'Pomarańcz', 'CEBULA', 'BURAK'
  ];

  constructor(private store: Store<fromApp.AppState>) { }

  addToCart(form: NgForm, index: number) {
    if (form.value.amount > 0) {
      this.store.dispatch(new ShoppingCartActions.AddProduct(new Product(this.products[index], form.value.amount)));
    }
  }
}
