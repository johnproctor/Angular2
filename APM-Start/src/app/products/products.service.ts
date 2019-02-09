import { Injectable } from "@angular/core";

import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    
    constructor(private http: HttpClient) {

    }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('api/products/products.json').pipe(
            tap(data => console.log('All ' + JSON.stringify(data)))
        );

    }


}