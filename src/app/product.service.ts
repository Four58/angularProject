import { Injectable } from '@angular/core';
import { products } from './products/products.component';
import { Observable, of } from 'rxjs';
import { todoLists } from './todo-modal/todo-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  newProduct: Product = {
    title: '',
    id: 0,
    description: '',
  };

  productTitle: string = '';
  productDescription: string = '';

  constructor() {}

  addProduct(title: string, id: number, description: string) {
    products.push({ title, id, description });
  }

  deleteProduct(id: number) {
    // products.filter((data) => data.id === id);
    const productArray = products.findIndex((data) => data.id === id);
    products.splice(productArray, 1);
  }

  getProducts(): Observable<Product[]> {
    const productList = of(products);
    return productList;
  }

  getProduct(id: number): Observable<Product> {
    const selectedProduct = products.find((data) => data.id === id)!;
    return of(selectedProduct);
  }

  addTodos(newTodo: string) {
    todoLists.push(newTodo);
    console.log(todoLists);
  }

  getTodos(): Observable<string[]> {
    const todoList = of(todoLists);
    return todoList;
  }

  clearTodos(): Observable<string[]> {
    const todoList = of([]);
    return todoList;
  }
}

export interface Product {
  title: string;
  id: number;
  description: string;
}
