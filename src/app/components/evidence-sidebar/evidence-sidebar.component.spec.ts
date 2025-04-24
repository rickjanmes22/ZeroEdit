import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenceSidebarComponent } from './evidence-sidebar.component';

describe('EvidenceSidebarComponent', () => {
  let component: EvidenceSidebarComponent;
  let fixture: ComponentFixture<EvidenceSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvidenceSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvidenceSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
