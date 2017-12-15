import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { ShowdashComponent } from "./component/showdash/showdash.component";

@NgModule({
    imports: [CommonModule, DashboardRoutingModule],
    declarations: [DashboardComponent,ShowdashComponent],
    providers: []
})
export class DashboardModule {

}