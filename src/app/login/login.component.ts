import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  constructor(private router: Router) {}
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  authService: any;

  onLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subcribe({
        next: (res: { token: any }) => {
          this.authService.setToken(res.token);
          this.router.navigate(['/todos']);
        },
        error: () => alert('login failed'),
      });
    }
  }
}
