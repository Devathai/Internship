import { Component, inject, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  todoService = inject(TodoserviceService);
  fb = inject(FormBuilder);

  ngOnInit(): void {}
  todoForm = this.fb.group({
    text: ['', Validators.required],
  });
  loadTodos() {
    this.todoService.getTodos().subscribe({
      next: (res: any) => {
        this.todos = res;
      },
      error: () => alert('failed to load todos'),
    });
  }
  AddTodo() {
    if (this.todoForm.valid) {
      const { text } = this.todoForm.value;
      this.todoService.createTodo(text).subscribe({
        next: (todo: any) => {
          console.log('Todo created:', todo);
          this.todos.push(todo);
          this.todoForm.reset();
        },
      });
    }
  }
  deleteTodo(id: string) {
    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
      },
      error: () => alert('Failde to delete a todo'),
    });
  }
}
