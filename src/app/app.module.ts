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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    TitleComponent,
    CardsComponent,
    VendasComponent,
    InputComponent,
    SelectComponent
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
