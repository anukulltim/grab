import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AiMonitorComponent } from './components/ai-monitor/ai-monitor.component';
import { OpenIncidentsComponent } from './components/ai-monitor/open-incidents/open-incidents.component';
import { ClosedIncidentsComponent } from './components/ai-monitor/closed-incidents/closed-incidents.component';
import { ActiveMonitoringComponent } from './components/ai-monitor/active-monitoring/active-monitoring.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'ai-monitor',
    component: AiMonitorComponent,
    children: [
      { path: '', redirectTo: 'open-incidents', pathMatch: 'full' },
      { path: 'open-incidents', component: OpenIncidentsComponent },
      { path: 'closed-incidents', component: ClosedIncidentsComponent },
      { path: 'active-monitoring', component: ActiveMonitoringComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
