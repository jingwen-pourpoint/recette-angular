import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecetteComponent } from './pages/recette/recette.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeDeRecetteComponent } from './pages/recette/liste-de-recette/liste-de-recette.component';
import { NouvelleRecetteComponent } from './pages/recette/nouvelle-recette/nouvelle-recette.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailRecetteComponent } from './pages/recette/detail-recette/detail-recette.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    RecetteComponent,
    ShoppingListComponent,
    ListeDeRecetteComponent,
    NouvelleRecetteComponent,
    DetailRecetteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
