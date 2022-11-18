import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpLoadingInterceptor} from "./interceptors/http-loading.interceptor";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers : [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true,
    },
  ]
})
export class SharedModule { }
