import {Component, OnInit} from '@angular/core';
import {Product} from '../shared/ingredient.model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as ShoppingCartActions from './store/shopping-cart.actions';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCartState: Observable<{products: Product[]}>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.shoppingCartState = this.store.select('shoppingCart');
  }

  delete(index: number): void {
    this.store.dispatch(new ShoppingCartActions.DeleteProduct(index));
  }
}
