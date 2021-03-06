import { CadProdutoComponent } from './produto/cad-produto/cad-produto.component';
import { EditProdutoComponent } from './produto/edit-produto/edit-produto.component';
import { ListProdutoComponent } from './produto/list-produto/list-produto.component';
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
    {path: 'cadastros/list-produto', component: ListProdutoComponent},
    {path: 'cadastros/edit-produto', component: EditProdutoComponent},
    {path: 'cadastros/cad-produto', component: CadProdutoComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }