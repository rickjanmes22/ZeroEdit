import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-evidence-card',
  imports: [CommonModule],
  templateUrl: './evidence-card.component.html',
})
export class EvidenceCardComponent {
  @Input() evidence: any;
}
