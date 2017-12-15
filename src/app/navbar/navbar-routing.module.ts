
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar.component";
import { NgModule } from "@angular/core";

const routes:Routes=[

    {
        path:'',
        component:NavbarComponent
    }
];

@NgModule({

    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class NavbarRoutingModule{
    
}