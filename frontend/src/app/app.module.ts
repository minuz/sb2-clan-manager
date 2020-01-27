import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CloudsComponent } from './components/clouds/clouds.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { MembersTableComponent } from './components/members-table/members-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersTableComponent,
    CloudsComponent,
    HeaderComponent,
    LeftMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    FontAwesomeModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
