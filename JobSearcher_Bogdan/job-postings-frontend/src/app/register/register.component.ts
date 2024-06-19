import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule]
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService.register(this.user).subscribe(
      (response: any) => {
        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error(error);
        alert('Registration failed');
      }
    );
  }
}
