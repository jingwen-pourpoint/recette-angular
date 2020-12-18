import { IngredientModel } from './../models/IngredientModel';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private ingredientSusbscription! : Subscription;
  numberIngredients = 0;

  constructor(private shoppingListService :ShoppingListService) { }

  ngOnInit(): void {
    this.ingredientSusbscription = this.shoppingListService.recupererIngredients.subscribe(
      (ingredients: IngredientModel[]) => this.numberIngredients = ingredients.length
    );
  }

}
