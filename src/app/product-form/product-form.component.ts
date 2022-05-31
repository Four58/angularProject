import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { products } from '../products/products.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  newTitle = '';
  newDescription = '';
  validTitle: boolean = true;
  validDescription: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onAddProduct() {
    if (this.newTitle != '' && this.newDescription != '') {
      const id = Math.floor(Math.random() * 100);
      while (products.find((data) => data.id === id)) {
        const id = Math.floor(Math.random() * 100);
      }
      this.productService.addProduct(this.newTitle, id, this.newDescription);
      this.newTitle = '';
      this.newDescription = '';
    } else if (this.newTitle != '') {
      this.validDescription = false;
    } else if (this.newDescription != '') {
      this.validTitle = false;
    } else {
      this.validTitle = false;
      this.validDescription = false;
    }
  }

  onInputTitle(data: string) {
    this.newTitle = data;
    this.validTitle = true;
  }

  onInputDescription(data: string) {
    this.newDescription = data;
    this.validDescription = true;
  }
}
