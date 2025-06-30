import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  adminName = 'Admin';
  profileImageUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format';
  grabLogoUrl = 'https://cdn.worldvectorlogo.com/logos/grab.svg';
}
