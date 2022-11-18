import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductRoutingModule} from "./product-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import {MatTooltipModule} from "@angular/material/tooltip";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./store";
import {EffectsModule} from "@ngrx/effects";
import {ProductEffects} from "./store/effects/products.effects";
import {MatRippleModule} from "@angular/material/core";
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature([ProductEffects]),
    ProductRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatRippleModule,
    MatCardModule,
    MatDialogModule,
  ],
})
export class ProductModule {
}
