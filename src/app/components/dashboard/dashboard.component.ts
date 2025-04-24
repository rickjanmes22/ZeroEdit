import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeycloakService } from '../../services/keycloak.service';
import { ApiService } from '../../services/api.service';

@Component({
  standalone: true,
  selector: 'app-root', 
  templateUrl: './dashboard.component.html', 
  imports: [CommonModule],
})export class DashboardComponent {
  username = '';
  secureMessage = '';

  private keycloak = inject(KeycloakService);
  private api = inject(ApiService);

  constructor() {
    this.username = this.keycloak.getUsername();
  }

  logout() {
    this.keycloak.logout();
  }

  getData() {
    this.api.getSecureData().subscribe(res => {
      this.secureMessage = res.message;
    });
  }
}
