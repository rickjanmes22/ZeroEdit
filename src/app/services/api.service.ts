import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from './keycloak.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient, private keycloak: KeycloakService) {}

  getSecureData(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.keycloak.getToken()}`);
    return this.http.get('http://localhost:8000/secure-data', { headers });
  }
}
