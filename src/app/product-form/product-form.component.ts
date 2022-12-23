import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  constructor(private products: ProductsService, private router: Router) {}

  addProduct() {
    this.products.addProduct({
      id: 4,
      name: 'Producto nuevo',
      description: 'Nuevo producto para probar',
      price: 100,
    });

    this.router.navigate(['']);
  }
}
