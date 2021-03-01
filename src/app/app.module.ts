import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { TitleComponent } from './shared/title/title.component';
import { CardsComponent } from './dashboard/cards/cards.component';
import { VendasComponent } from './vendas/vendas.component';
import { InputComponent } from './shared/input/input.component';
import { SelectComponent } from './shared/select/select.component';
import { CadastroComponent } from './vendas/cadastro/cadastro.component';
import { ListCategoriaComponent } from './categoria/list-categoria/list-categoria.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { EditCategoriaComponent } from './categoria/edit-categoria/edit-categoria.component';
import { CadCategoriaComponent } from './categoria/cad-categoria/cad-categoria.component';
import { FormsCategoriaComponent } from './categoria/forms-categoria/forms-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    TitleComponent,
    CardsComponent,
    VendasComponent,
    InputComponent,
    SelectComponent,
    CadastroComponent,
    ListCategoriaComponent,
    NavigationComponent,
    EditCategoriaComponent,
    CadCategoriaComponent,
    FormsCategoriaComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
