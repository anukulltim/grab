import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-incidents',
  templateUrl: './open-incidents.component.html',
  styleUrls: ['./open-incidents.component.scss']
})
export class OpenIncidentsComponent implements OnInit {

  incidents = [
    {
      id: 'INC-001',
      title: 'UPI Payment Gateway Timeout',
      severity: 'High',
      status: 'Open',
      assignedTo: 'John Doe',
      createdAt: '2024-01-15 09:30:00',
      description: 'Multiple UPI transactions are timing out during peak hours',
      affectedServices: ['UPI Gateway', 'Mobile App'],
      estimatedImpact: '15% of UPI transactions',
      aiPrediction: 'High probability of continued failures if not resolved within 2 hours'
    },
    {
      id: 'INC-002',
      title: 'Credit Card Processing Delays',
      severity: 'Medium',
      status: 'In Progress',
      assignedTo: 'Jane Smith',
      createdAt: '2024-01-15 11:15:00',
      description: 'Credit card transactions experiencing delays in authorization',
      affectedServices: ['Card Gateway', 'POS System'],
      estimatedImpact: '8% of card transactions',
      aiPrediction: 'Delay pattern suggests network congestion - resolving automatically'
    },
    {
      id: 'INC-003',
      title: 'Wallet Balance Sync Issues',
      severity: 'Low',
      status: 'Open',
      assignedTo: 'Mike Johnson',
      createdAt: '2024-01-15 13:45:00',
      description: 'Digital wallet balances not syncing properly across devices',
      affectedServices: ['Wallet Service', 'Mobile App'],
      estimatedImpact: '3% of wallet users',
      aiPrediction: 'Minor synchronization lag - self-healing expected within 1 hour'
    }
  ];

  filteredIncidents = [...this.incidents];
  filterStatus: string = 'all';
  filterSeverity: string = 'all';

  // Solutions modal properties
  showSolutionsModal: boolean = false;
  currentIncidentId: string = '';
  currentSolutions: any[] = [];
  treeData: any = null;

  // Solutions data for different incident types
  solutionsData: any = {
    'INC-001': {
      name: 'UPI Gateway Solutions',
      children: [
        {
          name: 'Restart Gateway Service',
          value: 65,
          description: 'Restart the UPI gateway service to clear any stuck connections and refresh the service state.',
          children: [
            { name: 'Stop Service', value: 20 },
            { name: 'Clear Cache', value: 25 },
            { name: 'Start Service', value: 20 }
          ]
        },
        {
          name: 'Scale Up Resources',
          value: 30,
          description: 'Increase server capacity to handle the current load and prevent timeouts.',
          children: [
            { name: 'Add CPU', value: 15 },
            { name: 'Add Memory', value: 15 }
          ]
        },
        {
          name: 'Switch to Backup Gateway',
          value: 70,
          description: 'Route traffic to the backup UPI gateway while fixing the primary gateway.',
          children: [
            { name: 'Health Check', value: 30 },
            { name: 'Route Traffic', value: 40 }
          ]
        }
      ]
    },
    'INC-002': {
      name: 'Card Processing Solutions',
      children: [
        {
          name: 'Network Optimization',
          value: 75,
          description: 'Optimize network routes and reduce congestion in card processing pipeline.',
          children: [
            { name: 'Traffic Balancing', value: 35 },
            { name: 'Route Optimization', value: 40 }
          ]
        },
        {
          name: 'Cache Refresh',
          value: 25,
          description: 'Clear and refresh authorization cache to improve processing speed.',
          children: [
            { name: 'Clear Auth Cache', value: 12 },
            { name: 'Rebuild Cache', value: 13 }
          ]
        },
        {
          name: 'Increase Timeout Limits',
          value: 68,
          description: 'Temporarily increase timeout limits to accommodate network delays.',
          children: [
            { name: 'Gateway Timeout', value: 30 },
            { name: 'Auth Timeout', value: 38 }
          ]
        }
      ]
    },
    'INC-003': {
      name: 'Wallet Sync Solutions',
      children: [
        {
          name: 'Force Sync',
          value: 82,
          description: 'Force synchronization of wallet balances across all user devices.',
          children: [
            { name: 'User Data Sync', value: 40 },
            { name: 'Balance Reconciliation', value: 42 }
          ]
        },
        {
          name: 'Clear Sync Cache',
          value: 28,
          description: 'Clear synchronization cache and rebuild from source of truth.',
          children: [
            { name: 'Clear Device Cache', value: 14 },
            { name: 'Rebuild Cache', value: 14 }
          ]
        },
        {
          name: 'Database Cleanup',
          value: 72,
          description: 'Clean up inconsistent wallet data in the database.',
          children: [
            { name: 'Data Validation', value: 35 },
            { name: 'Cleanup Script', value: 37 }
          ]
        }
      ]
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredIncidents = this.incidents.filter(incident => {
      const statusMatch = this.filterStatus === 'all' || incident.status.toLowerCase().includes(this.filterStatus.toLowerCase());
      const severityMatch = this.filterSeverity === 'all' || incident.severity.toLowerCase() === this.filterSeverity.toLowerCase();
      return statusMatch && severityMatch;
    });
  }

  getSeverityClass(severity: string): string {
    switch(severity.toLowerCase()) {
      case 'high': return 'severity-high';
      case 'medium': return 'severity-medium';
      case 'low': return 'severity-low';
      default: return '';
    }
  }

  getStatusClass(status: string): string {
    switch(status.toLowerCase().replace(' ', '-')) {
      case 'open': return 'status-open';
      case 'in-progress': return 'status-progress';
      case 'resolved': return 'status-resolved';
      default: return '';
    }
  }

  getCountBySeverity(severity: string): number {
    return this.filteredIncidents.filter(incident => incident.severity === severity).length;
  }

  openSolutions(incidentId: string) {
    this.currentIncidentId = incidentId;
    this.showSolutionsModal = true;
    
    const solutionData = this.solutionsData[incidentId];
    if (solutionData) {
      this.currentSolutions = solutionData.children.map((solution: any) => ({
        name: solution.name,
        value: solution.value,
        description: solution.description,
        children: solution.children || []
      }));
      
      this.treeData = solutionData;
    }
  }

  closeSolutions() {
    this.showSolutionsModal = false;
    this.currentIncidentId = '';
    this.currentSolutions = [];
    this.treeData = null;
  }
}
