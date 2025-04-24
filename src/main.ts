import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { KeycloakService } from './app/services/keycloak.service';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { authGuard } from './app/guards/auth.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];

const keycloakService = new KeycloakService();

keycloakService.init().then(authenticated => {
  if (authenticated) {
    bootstrapApplication(DashboardComponent, {
      providers: [
        provideRouter(routes),
        provideHttpClient(),
        { provide: KeycloakService, useValue: keycloakService }
      ]
    });
  } else {
    keycloakService.login();
  }
});

