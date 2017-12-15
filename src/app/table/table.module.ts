import { NgModule } from "@angular/core/";
import { CommonModule } from "@angular/common";
import { TableRoutingModule } from "./table-routing.module";
import { TableComponent } from "./table.component";
import { ShowtableComponent } from "./component/showtable/showtable.component";






@NgModule({
    imports: [
        CommonModule,
       TableRoutingModule
    ],
    declarations: [
       TableComponent,
       ShowtableComponent


    ],
    providers: []
})
export class MyTableModule {

}