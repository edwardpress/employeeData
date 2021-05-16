import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { SalaryTableComponent } from './shared/components/salary-table/salary-table.component';
import { SortTableDirective } from './shared/directives/sort-table.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SalaryTableComponent,
    SortTableDirective,
  ],
  imports: [BrowserModule, NgxBootstrapIconsModule.pick(allIcons)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
