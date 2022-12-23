import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor(private products: ProductsService, private router: Router) {}

  product$ = this.products.getProducts();

  addProduct() {
    this.router.navigate(['/product']);
  }

  deleteProduct() {
    this.products.delete(4);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
