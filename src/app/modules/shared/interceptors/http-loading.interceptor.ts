import {
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {finalize} from "rxjs/operators";
import {DataIntentService} from "../services/data-intent.service";

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {

  constructor(public dataIntentService: DataIntentService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.dataIntentService.isLoading.next(true);
    return next.handle(request).pipe(
      finalize(()=> this.dataIntentService.isLoading.next(false))
    );
  }
}
