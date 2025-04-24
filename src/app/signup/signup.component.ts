import { Component, inject } from '@angular/core';
import { AuthService } from '../authservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  constructor(private router: Router) {}
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSignUp() {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      this.auth.signup({ email, password }).subscribe({
        next: () => this.router.navigate(['/login']),
        error: () => alert('signUp failed'),
      });
    }
  }
}
