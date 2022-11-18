import { IProduct } from 'src/app/modules/product/interfaces/product';
import {createAction, props} from "@ngrx/store";

export const GetProductLoad = createAction('GetProductLoad');
export const GetProductSuccess = createAction('GetProductSuccess',
  props<{payload : IProduct[]}>())
