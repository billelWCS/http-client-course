import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  URL = "https://api.pokemontcg.io/v1/"
  constructor(private http : HttpClient) { }

  getCards() : Observable<any>{
    return this.http.get<any>(this.URL+"cards");
  }

  getCardById(id : string) : Observable<any>{
    return this.http.get<any>(this.URL+"cards/"+id);
  }
}
