import { IngredientModel } from './../../models/IngredientModel';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { query } from '@angular/animations';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [];
  ingredient: FormGroup;
  private ingredientSusbscription!: Subscription;


  constructor(private shoppingListService: ShoppingListService, private fb: FormBuilder) {
    this.ingredient = this.fb.group({
      nom: ['', Validators.required],
      quantite: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientSusbscription = this.shoppingListService.recupererIngredients.subscribe(
      (ingredients: IngredientModel[]) => this.ingredients = ingredients
    );
  }

  supprime(i: number): void {
    this.shoppingListService.supprimeIngredient(i);
  }

  ajoute(): void {
    let nouvelle = this.ingredient.value as IngredientModel;
    this.shoppingListService.addIngredient(nouvelle);
  }




}
