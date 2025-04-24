import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TodosComponent } from './todos/todos.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularapp';
}
