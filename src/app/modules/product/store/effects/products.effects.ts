import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { map, mergeMap} from 'rxjs/operators';
import {IProduct} from 'src/app/modules/product/interfaces/product';
import {ProductService} from "../../services/product/product.service";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import * as ProductActions from '../actions/products.actions'

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private productService: ProductService) {
  }

  getProducts$ : Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.GetProductLoad),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((product: IProduct[]) => ProductActions.GetProductSuccess({payload: product}))
        )
      ));
  });


}
