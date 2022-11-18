import * as ProductActions from '../actions/products.actions';
import {Action, createReducer, on} from "@ngrx/store";
import {initialState} from "../state/intialState";

const productReducer = createReducer(
  initialState,
  on(ProductActions.GetProductLoad, state => state),
  on(ProductActions.GetProductSuccess, (state, {payload}) => {
      return {
        ...state,
        listOfProducts: payload,
        message: 'Data fetch Successfully!'
      }
    }
  ))

export function reducer(state: any, action: Action) {
  return productReducer(state, action)
}
