import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../services/product/product.service";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatRippleModule} from "@angular/material/core";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {CommonModule} from "@angular/common";
import {ProductState} from "../../interfaces/product";

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let store: MockStore<ProductState>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent, ProductDetailsComponent ],
      imports:[
        provideMockStore({}),
        HttpClientTestingModule,
        FormsModule,
        CommonModule,
        BrowserDynamicTestingModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatRippleModule,
      ],
      providers:[
        ProductService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 1',()=>{
    expect(component.s()).toEqual(1);
  })
});
