import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {Subscription} from "rxjs";
import {IProduct, ProductState} from "../../interfaces/product";
import {productDisplayedColumns} from "../../../../constants/constants";
import {select, Store} from "@ngrx/store";
import * as ProductActions from "src/app/modules/product/store";
import {listOfProductSelector} from "src/app/modules/product/store";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns: string[] = productDisplayedColumns;
  searchTerm: string = '';
  dataSource = new MatTableDataSource<IProduct>();
  defaultProductList: IProduct[] = [];
  productList: any = [];
  serviceSubscription$ = new Subscription();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  products$: Observable<IProduct[]>;

  constructor(private productService: ProductService, private _store: Store<ProductState>, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this._store.dispatch(ProductActions.GetProductLoad());
    this.getProductListWithStore();
  }

  getProductListWithStore() {
    this.products$ = this._store.pipe(select(listOfProductSelector))
    this.serviceSubscription$.add(this.products$.subscribe(response => {
      this.assignDataToTable(response);
    }));
  }

  assignDataToTable(response: IProduct[]) {
    this.defaultProductList = this.productList = response
    this.dataSource.data = this.productList;
  }

  ngOnDestroy(): void {
    this.serviceSubscription$.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  selectedProduct(selectedProduct: object) {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      data: {selectedProduct},
      maxHeight: '90vh',
      maxWidth: '80vw',
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

  filterBySearch(searchTerm: string) {
    if (searchTerm && searchTerm.trim() !== '') {
      this.dataSource.data = this.productList.filter(
        (item: any) => item?.origin?.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
          item?.blend_name?.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
          item?.variety?.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
          item?.intensifier?.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
    } else {
      this.dataSource.data = this.productList = this.defaultProductList;
    }
  }

  s(){
    return 1;
  }
}
