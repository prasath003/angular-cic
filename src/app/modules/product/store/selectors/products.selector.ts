import {AppStateInterface, ProductState} from "../../interfaces/product";
import {createFeatureSelector, createSelector} from "@ngrx/store";

const getUserState = createFeatureSelector<ProductState>('products');

export const listOfProductSelector = createSelector(getUserState, (state)=>
  state?.listOfProducts)
