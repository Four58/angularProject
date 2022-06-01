import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

export const todoLists: string[] = [];

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss'],
})
export class TodoModalComponent implements OnInit {
  newTodo = '';
  noInput: boolean = false;
  todoLists: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getTodo();
  }
  addTodo() {
    if (this.newTodo != '') {
      this.productService.addTodos(this.newTodo);
      this.newTodo = '';
    } else {
      this.noInput = true;
    }
  }

  clearTodo() {
    this.productService.clearTodos();
  }

  onInputTodo(todo: string) {
    this.newTodo = todo;
    this.noInput = false;
  }

  getTodo() {
    this.productService
      .getTodos()
      .subscribe((todoList) => (this.todoLists = todoList));
  }
}
