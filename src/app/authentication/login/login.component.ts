import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('✅ Login Response:', response); // Log the response
  
        if (response.token) {  // Ensure backend sends a token
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Login failed. No token received.';
        }
      },
      (error) => {
        console.error('❌ Login Error:', error);
        this.errorMessage = 'Invalid username or password';
      }
    );
  }
  
}
