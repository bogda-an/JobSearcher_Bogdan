import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule]
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    this.http.post('http://localhost:5000/api/users/login', this.credentials).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token); // Store the token in local storage
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error logging in:', error);
        alert('Invalid credentials');
      }
    );
  }
}