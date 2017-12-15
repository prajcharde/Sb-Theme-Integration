import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { HeaderComponent } from "./component/header/header.component";

@NgModule({
    imports: [CommonModule,RouterModule,  LayoutRoutingModule],
    declarations: [LayoutComponent, HeaderComponent],
    providers: []
})
export class LayoutModule {

}