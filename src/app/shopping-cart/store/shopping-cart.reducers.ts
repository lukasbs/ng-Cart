import * as ShoppingCartActions from './shopping-cart.actions';
import {Product} from '../../shared/ingredient.model';

export interface State {
  products: Product[];
}

const initialState: State = {
  products: [],
};

export function shoppingCartReducer(state = initialState, action: ShoppingCartActions.ShoppingCartActions) {
  switch (action.type) {
    case ShoppingCartActions.ADD_PRODUCT:
      const products = [...state.products];
      let found = false;
      for (const item of products) {
        if (item.name === action.payload.name) {
          item.amount += action.payload.amount;
          found = true;
        }
      }
      return found ? {
        ...state,
        products: products
      } : {
        ...state,
        products: [...state.products, action.payload]
      };
    case ShoppingCartActions.DELETE_PRODUCT:
      const oldProducts = [...state.products];
      oldProducts.splice(action.payload, 1);
      return {
        ...state,
        products: oldProducts
      };
    default:
      return state;
  }
}
