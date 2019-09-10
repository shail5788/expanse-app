import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponentComponent } from "./dashboard-component/dashboard-component.component";
import { DashboardRoutingModule } from "./dashboard.route.module";
@NgModule({
  declarations: [DashboardComponentComponent],
  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
