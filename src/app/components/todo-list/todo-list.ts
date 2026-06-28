import { Component, inject } from '@angular/core';
import { TodoSerive } from '../../shared/services/todo-serive';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../shared/models/todo';

@Component({
  selector: 'app-todo-list',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  service = inject(TodoSerive);
  todos = this.service.todoList;

  addInfo = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    priority: new FormControl<'low' | 'medium' | 'high' | 'urgent'>('medium', [
      Validators.required,
    ]),
    status: new FormControl<'open' | 'in-progress' | 'done'>('open', [Validators.required]),
  });

  addTodo() {
    const todo: Todo = {
      id: Date.now(),
      title: this.addInfo.value.title ?? '',
      description: this.addInfo.value.description ?? '',
      priority: this.addInfo.value.priority ?? 'medium',
      status: this.addInfo.value.status ?? 'open',
      createdAt: new Date().toDateString(),
    };

    this.service.addTodo(todo);

    this.addInfo.reset({
      priority: 'medium',
      status: 'open',
    });
  }

  toggleStatus(id: number) {
    this.service.toggleStatus(id);
  }
}
