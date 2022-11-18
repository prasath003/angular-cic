import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MockStore} from "@ngrx/store/testing";
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {ProductService} from "../../services/product/product.service";
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatRippleModule} from "@angular/material/core";
import {ProductState} from "../../interfaces/product";
import {MatInput, MatInputModule} from "@angular/material/input";
import {StoreModule} from "@ngrx/store";
import {reducer} from "../../store";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {of} from "rxjs";

const fakeData = [{"id":3731,"uid":"3a872d0c-bd44-49ba-addd-217b79ef23a5","blend_name":"Holiday Coffee","origin":"Cundinamarca, Colombia","variety":"Villa Sarchi","notes":"crisp, slick, butter, fresh bread, marshmallow","intensifier":"delicate"}]

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let dialogSpy : jasmine.Spy;
  let dialogRef = jasmine.createSpyObj({afterClosed: of({}), close: null});
  dialogRef.componentInstance = {body : ''};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent, MatTable, MatInput, MatPaginator, MatSort ],
      imports:[
        MatTableModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('products',reducer),
        MatPaginatorModule,
        MatSortModule,
        BrowserAnimationsModule,
        FormsModule,
        MatTooltipModule,
        MatRippleModule,
        MatDialogModule,
        MatInputModule,
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should give list of product based on search',()=>{
    component.defaultProductList = component.productList = fakeData
    component.filterBySearch('Holiday Coffee');
    expect(component.dataSource.data).toBeDefined();
  })

  it('should give default list of product in no search term',()=>{
    component.defaultProductList = component.productList = fakeData
    component.filterBySearch('');
    expect(component.dataSource.data).toBeDefined();
  })

  xit('should check modal is opened', () => {
    component.selectedProduct(fakeData);
    expect(dialogSpy).toHaveBeenCalled();
  });
});
