import { DetailRecetteComponent } from './pages/recette/detail-recette/detail-recette.component';
import { NouvelleRecetteComponent } from './pages/recette/nouvelle-recette/nouvelle-recette.component';
import { ListeDeRecetteComponent } from './pages/recette/liste-de-recette/liste-de-recette.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { RecetteComponent } from './pages/recette/recette.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'recette', pathMatch: 'full'},
  {
  path: "recette",component:RecetteComponent,
  children : [
    { path: "liste-de-recette", component:ListeDeRecetteComponent },
    { path: "nouvelle-recette", component:NouvelleRecetteComponent },
    { path: "detail-recette", component: DetailRecetteComponent},
    { path: "detail-recette/:id", component:DetailRecetteComponent}
  ]},
  { path: "shopping-list", component: ShoppingListComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
