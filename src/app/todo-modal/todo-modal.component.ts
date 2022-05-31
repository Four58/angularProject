import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss'],
})
export class TodoModalComponent implements OnInit {
  todoLists: string[] = [];
  newTodo = '';
  noInput: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  addTodo() {
    if (this.newTodo != '') {
      this.todoLists.push(this.newTodo);
      this.newTodo = '';
    } else {
      this.noInput = true;
    }
  }

  clearTodo() {
    this.todoLists = [];
  }

  onInputTodo(todo: string) {
    this.newTodo = todo;
    this.noInput = false;
  }
}
