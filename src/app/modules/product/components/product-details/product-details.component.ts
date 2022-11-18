import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {IProduct} from "../../interfaces/product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

//TODO: Component is done for design purpose
export class ProductDetailsComponent implements OnInit {
  productDetails : IProduct = {};
  constructor( @Inject(MAT_DIALOG_DATA)
               public data: { selectedProduct: object; }) { }

  ngOnInit(): void {
    this.productDetails = this.data?.selectedProduct;
  }

}
