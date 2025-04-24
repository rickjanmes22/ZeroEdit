import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceSidebarComponent } from '../evidence-sidebar/evidence-sidebar.component';
import { EvidenceGridComponent } from '../evidence-grid/evidence-grid.component';

@Component({
  standalone: true,
  selector: 'app-evidence-dashboard',
  imports: [CommonModule, EvidenceSidebarComponent, EvidenceGridComponent],
  templateUrl: './evidence-dashboard.component.html',
})
export class EvidenceDashboardComponent {}
