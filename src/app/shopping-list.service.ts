import { IngredientModel } from './models/IngredientModel';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  recupererIngredients = new Subject<IngredientModel[]>();
  ingredients : IngredientModel[] = [];

  constructor() { }

  getIngredients() : IngredientModel[] {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.recupererIngredients.next(this.getIngredients());
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.recupererIngredients.next(this.getIngredients());
  }

  supprimeIngredient(i:number){
    this.ingredients.splice(i, 1);
    this.recupererIngredients.next(this.getIngredients());
  }

  
}
