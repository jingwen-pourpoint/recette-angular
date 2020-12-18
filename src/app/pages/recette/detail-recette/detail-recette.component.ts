import { ShoppingListService } from './../../../shopping-list.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailRecetteService } from 'src/app/detail-recette.service';
import { RecetteModel } from 'src/app/models/RecetteModel';
import { RecetteService } from 'src/app/recette.service';

@Component({
  selector: 'app-detail-recette',
  templateUrl: './detail-recette.component.html',
  styleUrls: ['./detail-recette.component.css']
})

export class DetailRecetteComponent implements OnInit {

  recette!: RecetteModel;



  constructor(private detailRecetteService: DetailRecetteService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private shoppingListService: ShoppingListService) { }


  defaultImage = "https://static.vecteezy.com/ti/vecteur-libre/t3/154515-hot-chili-habanero-recette-hand-drown-vector-background-illustration-gratuit-vectoriel.jpg";


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.detailRecetteService.get(id).subscribe(response => {
        this.recette = response;
        console.log(this.recette);
      })
    })
  }

  toShoppingList() {
    this.shoppingListService.addIngredients(this.recette.ingredients);
  }

}

