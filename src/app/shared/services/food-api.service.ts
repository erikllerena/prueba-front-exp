import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilterSearch } from '../models/FilterSearch';
import { RecipeResponse } from '../models/RecipeResponse';
import { BUSQUEDA_COMPLEJA } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {
  private urlEndPoint: string;
  constructor(private http: HttpClient) {
    this.urlEndPoint = `${environment.apiUrl}`;
  }

  buscarRecetas(request: any): Observable<RecipeResponse> {
    return this.http.get<RecipeResponse>(`${this.urlEndPoint}${BUSQUEDA_COMPLEJA}`, {params: request});
  }
}
