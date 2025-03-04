import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://172.16.8.12:8762/auth/login'; // Your backend login URL

  constructor(private http: HttpClient) {}

  // ✅ User login method with proper headers
  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    return this.http.post<any>(this.apiUrl, { username, password }, { headers }).pipe(
      catchError((error) => {
        console.error('❌ Login error:', error);
        return throwError(() => new Error(error.error?.message || 'Login failed'));
      })
    );
  }

  // ✅ Save token & username to localStorage
  setAuthData(token: string, username: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }

  // ✅ Get token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // ✅ Get username
  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  // ✅ Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // ✅ Logout (remove token & username)
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }
}
