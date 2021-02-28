import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendasComponent } from './vendas/vendas.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'vendas', component: VendasComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }