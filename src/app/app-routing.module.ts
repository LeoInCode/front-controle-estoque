import { CadCategoriaComponent } from './categoria/cad-categoria/cad-categoria.component';
import { EditCategoriaComponent } from './categoria/edit-categoria/edit-categoria.component';
import { ListCategoriaComponent } from './categoria/list-categoria/list-categoria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendasComponent } from './vendas/vendas.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'vendas', component: VendasComponent},
    {path: 'cadastros/list-categoria', component: ListCategoriaComponent},
    {path: 'cadastros/edit-categoria', component: EditCategoriaComponent},
    {path: 'cadastros/cad-categoria', component: CadCategoriaComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }