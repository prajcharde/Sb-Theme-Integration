import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: '../dashboard/dashboard.module#DashboardModule'
            },
             {
                path: 'chart',
                loadChildren: '../form/form.module#MyFormModule'
            },
             {
                path: 'table',
                loadChildren: '../table/table.module#MyTableModule'
            },
            {
                path:'navbar',
                loadChildren:'../navbar/navbar.module#NavbarModule'
            }

          
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {

}