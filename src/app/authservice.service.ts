import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:3000/auth';
  token: string | null = null;
  constructor(private http: HttpClient) {}
  login(data: any) {
    return this.http.post<{ token: string }>(`${this.baseUrl}/login`, data);
  }
  signup(data: any) {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }
  setToken(token: string) {
    this.token = token;
    if (typeof token === 'string') {
      localStorage.setItem('token', token);
    }
  }
  getToken() {
    return this.token || localStorage.getItem('token');
  }
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  logout() {
    this.token = null;
    localStorage.removeItem('token');
  }
}
