import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  liveMetrics = {
    transactionsProcessed: 124567,
    predictedFailures: 23,
    systemHealth: 98.5,
    averageLatency: 45
  };

  constructor(private router: Router) {}

  navigateToAIMonitor() {
    this.router.navigate(['/ai-monitor']);
  }
}
