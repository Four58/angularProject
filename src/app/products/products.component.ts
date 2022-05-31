import { Component, OnInit } from '@angular/core';
import { Product } from '../product.service';
import { ProductService } from '../product.service';

export const products: Product[] = [
  { title: 'chicken', id: 1, description: 'A wing animal' },
  { title: 'french fries', id: 2, description: 'patato' },
  { title: 'fried rice', id: 3, description: 'delicious dish' },
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  onDelete(productId: number) {
    this.productService.deleteProduct(productId);
    console.log(productId);
  }
}
