import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({ providedIn: 'root' })
export class KeycloakService {
  private keycloak!: Keycloak;

  init(): Promise<boolean> {
    this.keycloak = new Keycloak({
      url: 'http://localhost:8080',
      realm: 'Zero-Edit',
      clientId: 'ZeroEdit'
    });

    return this.keycloak.init({
      onLoad: 'login-required',
      checkLoginIframe: false
    });
  }

  login() { this.keycloak.login(); }
  logout() { this.keycloak.logout(); }
  getToken(): string { return this.keycloak.token!; }
  getUsername(): string { return this.keycloak.tokenParsed?.['preferred_username'] ?? ''; }
  isUserInRole(role: string): boolean { return this.keycloak.hasRealmRole(role); }
}