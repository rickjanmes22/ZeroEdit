import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { KeycloakService } from '../services/keycloak.service';

export const authGuard: CanActivateFn = () => {
  const keycloakService = inject(KeycloakService);
  const token = keycloakService.getToken();
  if (token) return true;
  keycloakService.login();
  return false;
};
