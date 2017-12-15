import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableComponent } from "./table.component";
import { ShowtableComponent } from "./component/showtable/showtable.component";

const routes: Routes = [
    {
        path: '',
        component: TableComponent,
        children: [
            
            { path: 'showtable', component: ShowtableComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TableRoutingModule {

}