

import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { CommonModule } from "@angular/common";
import { NavbarRoutingModule } from "./navbar-routing.module";

@NgModule({
declarations:[
NavbarComponent
],

imports:[CommonModule,NavbarRoutingModule],
providers:[]



})
export class NavbarModule{

}