import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";



const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
      
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
      
    }
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}