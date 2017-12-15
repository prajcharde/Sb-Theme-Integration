import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { ChartComponent } from "./component/chart/chart.component";
import { FormComponent } from "./form.component";



const routes: Routes = [
    {
        path: '',
        component: FormComponent,
        children: [
            
            { path: 'chart', component: ChartComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormsRoutingModule {

}