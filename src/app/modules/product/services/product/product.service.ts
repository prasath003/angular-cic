import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from 'src/environments/environment'
import {IProduct} from "../../interfaces/product";
import {pathWithUrl} from "../../../../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.baseUrl}${pathWithUrl?.coffee}?size=50`);
  }

}
