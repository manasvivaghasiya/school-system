import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './components/header/header.component';
import { EmptyLayoutComponent } from './layout/empty-layout/empty-layout.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    EmptyLayoutComponent,
    FullLayoutComponent,
    DashboardMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
