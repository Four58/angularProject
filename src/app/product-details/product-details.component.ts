import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';
import { Product } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
    console.log('check');
    console.log(this.product);
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('productId'));
    console.log('paramId ' + this.route.snapshot.paramMap.get('productId'));
    this.productService
      .getProduct(id)
      .subscribe((selectProduct) => (this.product = selectProduct));
  }

  goBack(): void {
    this.location.back();
  }
}
