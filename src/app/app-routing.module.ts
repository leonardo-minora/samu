import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosComponent } from './dados/dados.component';

// Route config let's you map routes to components
const routes: Routes = [
    // map '/persons' to the people list component
    {
        path: 'dados',
        component: DadosComponent,
    },
    // map '/' to '/persons' as our default route
    // {
    //   path: '',
    //   redirectTo: '/persons',
    //   pathMatch: 'full'
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
