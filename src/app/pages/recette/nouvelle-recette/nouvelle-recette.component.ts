import { RecetteService } from 'src/app/recette.service';
import { RecetteModel } from './../../../models/RecetteModel';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouvelle-recette',
  templateUrl: './nouvelle-recette.component.html',
  styleUrls: ['./nouvelle-recette.component.css']
})
export class NouvelleRecetteComponent implements OnInit {

  nouvelleRecette: FormGroup;


  constructor(private fb: FormBuilder, private recetteService: RecetteService) {
    this.nouvelleRecette = this.fb.group({
      nom: ['',Validators.required],
      difficulte: ['facile'],
      ingredients: this.fb.array([this.createIngredients()]),
      photo: new FormControl("")
    })
  }

  createIngredients() {
    return this.fb.group({
      nom: this.fb.control(''),
      quantite: this.fb.control('')
    });
  }

  ngOnInit(): void {
  }

  get ingredients(): FormArray {
    return this.nouvelleRecette.get('ingredients') as FormArray
  }

  ajoutIngredient(): void {
    this.ingredients.push(this.createIngredients());
  }


  creationRecette(): void {
    let nouvelle = this.nouvelleRecette.value as RecetteModel;
    this.recetteService.create(nouvelle).subscribe();
  }
}
