import { inject, Injectable, signal } from '@angular/core';

import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoSerive {
  todoList = signal<Todo[]>([]);

  constructor() {
    this.todoList.set(this.listDaten);
  }

  listDaten: Todo[] = [];

  toggleStatus(id: number) {
    this.todoList.update((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === 'done' ? 'open' : 'done',
            }
          : todo,
      ),
    );
  }

  addTodo(todo: Todo) {
    this.todoList.update((list) => [...list, todo]);
  }
}
