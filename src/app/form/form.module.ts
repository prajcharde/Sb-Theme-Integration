import { NgModule } from "@angular/core/";
import { CommonModule } from "@angular/common";


import { FormComponent } from "./form.component";
import { FormsRoutingModule } from "./form-routing.module";
import { ChartComponent } from "./component/chart/chart.component";


@NgModule({
    imports: [
        CommonModule,
        FormsRoutingModule
    ],
    declarations: [
        FormComponent,
        ChartComponent,
   
    ],
    providers: []
})
export class MyFormModule {

}