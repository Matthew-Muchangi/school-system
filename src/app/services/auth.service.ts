import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://your-api-url.com/auth'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  // ✅ User login method
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // ✅ Save token to localStorage
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // ✅ Get token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // ✅ Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken(); // Returns true if token exists
  }

  // ✅ Logout (remove token)
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
