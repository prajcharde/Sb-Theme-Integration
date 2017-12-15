import { NgModule } from "@angular/core";
import { Router, Route, Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { ShowdashComponent } from "./component/showdash/showdash.component";


const routes: Routes = [
    {
        path: '',
         component: DashboardComponent
         , children: [
            { path: '', component: ShowdashComponent }
        ]
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}