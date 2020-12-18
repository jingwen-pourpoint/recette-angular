import { RecetteService } from './recette.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecetteModel } from './models/RecetteModel';

@Injectable({
  providedIn: 'root'
})
export class DetailRecetteService {

  constructor(private recetteService : RecetteService,private httpClient : HttpClient) { }

  get(id:number) : Observable <RecetteModel> {
    return this.httpClient.get<RecetteModel>(`http://localhost:3000/listeDeRectte/${id}`);
  }

}
