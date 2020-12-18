
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RecetteModel } from './models/RecetteModel';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<RecetteModel[]> {
    return this.httpClient.get<RecetteModel[]>("http://localhost:3000/listeDeRectte");
  }

  create(nouvelleRecette: RecetteModel): Observable<void> {
    console.log(nouvelleRecette);
    return this.httpClient.post<void>("http://localhost:3000/listeDeRectte", nouvelleRecette);
  }


  // get(id:number) : Observable <RecetteModel[]> {
  //   return this.httpClient.get<RecetteModel[]>(`http://localhost:3000/listeDeRectteDetaille/${id}`);
  // }

}
