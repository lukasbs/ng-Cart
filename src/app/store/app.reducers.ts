import * as fromShoppingCart from '../shopping-cart/store/shopping-cart.reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  shoppingCart: fromShoppingCart.State;
}

export const reducers: ActionReducerMap<AppState> = {
  shoppingCart: fromShoppingCart.shoppingCartReducer
};
