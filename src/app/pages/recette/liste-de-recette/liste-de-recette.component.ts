import { DetailRecetteService } from 'src/app/detail-recette.service';
import { RecetteService } from './../../../recette.service';
import { RecetteModel } from './../../../models/RecetteModel';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-liste-de-recette',
  templateUrl: './liste-de-recette.component.html',
  styleUrls: ['./liste-de-recette.component.css']
})
export class ListeDeRecetteComponent implements OnInit {

  listeDeRecette: RecetteModel[] = []

  defaultImage = "https://static.vecteezy.com/ti/vecteur-libre/t3/154515-hot-chili-habanero-recette-hand-drown-vector-background-illustration-gratuit-vectoriel.jpg";



  constructor(private recetteService: RecetteService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.recetteService.getAll().subscribe(response => {
      this.listeDeRecette = response;
    })
  }

}
