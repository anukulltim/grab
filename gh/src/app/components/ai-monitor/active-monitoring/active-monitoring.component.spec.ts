import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveMonitoringComponent } from './active-monitoring.component';

describe('ActiveMonitoringComponent', () => {
  let component: ActiveMonitoringComponent;
  let fixture: ComponentFixture<ActiveMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
