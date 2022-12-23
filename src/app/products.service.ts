import { Injectable } from '@angular/core';
import { BehaviorSubject, from, of, tap } from 'rxjs';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  product$ = new BehaviorSubject<Product[]>([]);

  getProducts(): Observable<Product[]> {
    return this.product$;
  }

  addProduct(product: Product) {
    this.product$.next([...this.product$.value, product]);
  }

  delete(id: number) {
    const idx = this.product$.value.findIndex((p) => p.id === id);
    if (idx === -1) throw 'no existe el producto';
    this.product$.next([
      ...this.product$.value.slice(0, idx),
      ...this.product$.value.slice(idx + 1),
    ]);
  }
}
