import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenceGridComponent } from './evidence-grid.component';

describe('EvidenceGridComponent', () => {
  let component: EvidenceGridComponent;
  let fixture: ComponentFixture<EvidenceGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvidenceGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvidenceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
