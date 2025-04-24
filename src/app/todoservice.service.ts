import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { AuthService } from './authservice.service';
import { text } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoserviceService {
  baseUrl = 'http://localhost:3000/todos';
  authService = inject(AuthService);
  constructor(private http: HttpClient) {}
  private get headers() {
    const token = this.authService.getToken();
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }
  getTodos() {
    return this.http.get(this.baseUrl, this.headers);
  }
  createTodo(text: string | null | undefined) {
    return this.http.post(this.baseUrl, { text }, this.headers);
  }
  deleteTodo(id: string) {
    return this.http.delete(`${this.baseUrl}/$id`, this.headers);
  }
}
