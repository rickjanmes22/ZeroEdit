import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceCardComponent } from '../evidence-card/evidence-card.component';

@Component({
  standalone: true,
  selector: 'app-evidence-grid',
  imports: [CommonModule, EvidenceCardComponent],
  templateUrl: './evidence-grid.component.html',

})
export class EvidenceGridComponent {
  evidenceList = [
    { id: '1', name: 'video1.mp4', status: 'verified', timestamp: '2025-04-20 14:33', thumbnail: 'https://via.placeholder.com/150' },
    { id: '2', name: 'photo.png', status: 'tampered', timestamp: '2025-04-21 10:12', thumbnail: 'https://via.placeholder.com/150' },
  ];
}
