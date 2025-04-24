import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-evidence-sidebar',
  imports: [CommonModule],
  templateUrl: './evidence-sidebar.component.html',

})
export class EvidenceSidebarComponent {
  @Output() filter = new EventEmitter<any>();

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.filter.emit({ search: value });
  }

  onStatusFilter(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.filter.emit({ status: value });
  }
}
