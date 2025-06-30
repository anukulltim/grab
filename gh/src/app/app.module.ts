import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AiMonitorComponent } from './components/ai-monitor/ai-monitor.component';
import { OpenIncidentsComponent } from './components/ai-monitor/open-incidents/open-incidents.component';
import { ClosedIncidentsComponent } from './components/ai-monitor/closed-incidents/closed-incidents.component';
import { ActiveMonitoringComponent } from './components/ai-monitor/active-monitoring/active-monitoring.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AiMonitorComponent,
    OpenIncidentsComponent,
    ClosedIncidentsComponent,
    ActiveMonitoringComponent,
    FilterPipe,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
