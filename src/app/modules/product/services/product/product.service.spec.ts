import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {IProduct} from "../../interfaces/product";

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should receive list of products',()=>{
    //TODO: Can be improved via mocking fake data equal
    let productList: IProduct[] = []
    service.getProducts().subscribe((response)=>{
      productList = response
    })
    expect(productList).not.toBeNull();
  })
});
