import {Observable} from "rxjs";
import {ProductEffects} from "./products.effects";
import {ProductService} from "../../services/product/product.service";
import {TestBed} from "@angular/core/testing";
import {provideMockActions} from "@ngrx/effects/testing";

describe('Effects', () => {
  let action: Observable<any>;
  let effects: ProductEffects;
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ProductEffects,
        provideMockActions(() => action), {
          provide: ProductService,
          useValue: {}
        }
      ]
    });
    service = TestBed.get(ProductService);
    effects = TestBed.get(ProductEffects);
  })
})
