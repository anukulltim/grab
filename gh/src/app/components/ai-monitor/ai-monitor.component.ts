import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-monitor',
  templateUrl: './ai-monitor.component.html',
  styleUrls: ['./ai-monitor.component.scss']
})
export class AiMonitorComponent {
  sidebarItems = [
    { 
      id: 'open-incidents', 
      label: 'Open Incidents', 
      icon: '🔴', 
      count: 3,
      route: '/ai-monitor/open-incidents'
    },
    { 
      id: 'closed-incidents', 
      label: 'Closed Incidents', 
      icon: '✅', 
      count: 45,
      route: '/ai-monitor/closed-incidents'
    },
    { 
      id: 'active-monitoring', 
      label: 'Active Monitoring', 
      icon: '📊', 
      count: 8,
      route: '/ai-monitor/active-monitoring'
    },
    { 
      id: 'predictions', 
      label: 'AI Predictions', 
      icon: '🤖', 
      count: 23,
      route: '/ai-monitor/predictions'
    },
    { 
      id: 'alerts', 
      label: 'System Alerts', 
      icon: '⚠️', 
      count: 5,
      route: '/ai-monitor/alerts'
    }
  ];

  selectedItem: string = 'open-incidents';

  showSearchModal: boolean = false;
  searchQuery: string = '';
  searchSuggestions: string[] = [
    'UPI gateway timeout',
    'Card processing delays',
    'Wallet sync issues',
    'Payment failures',
    'Network optimization',
    'Database cleanup',
    'System performance',
    'Error logs analysis'
  ];

  selectItem(itemId: string) {
    this.selectedItem = itemId;
  }

  openSearch() {
    this.showSearchModal = true;
    this.searchQuery = '';
    setTimeout(() => {
      const searchInput = document.querySelector('.search-input') as HTMLInputElement;
      if (searchInput) {
        searchInput.focus();
      }
    }, 100);
  }

  closeSearch() {
    this.showSearchModal = false;
    this.searchQuery = '';
  }

  performSearch() {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
      
      this.closeSearch();
    }
  }

  feelingLucky() {
    const randomSuggestion = this.searchSuggestions[Math.floor(Math.random() * this.searchSuggestions.length)];
    this.searchQuery = randomSuggestion;
    this.performSearch();
  }

  selectSuggestion(suggestion: string) {
    this.searchQuery = suggestion;
    this.performSearch();
  }

  searchCategory(category: string) {
    this.searchQuery = category;
    this.performSearch();
  }
}
