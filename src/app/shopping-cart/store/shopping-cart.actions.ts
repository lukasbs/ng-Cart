import {Action} from '@ngrx/store';
import {Product} from '../../shared/ingredient.model';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;
  constructor (public payload: Product) {}
}

export class DeleteProduct implements Action {
  readonly type = DELETE_PRODUCT;
  constructor (public payload: number) {}
}

export type ShoppingCartActions = AddProduct | DeleteProduct;
