import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cardsUrl = 'http://localhost:3000/cards';
  constructor(
    private http: HttpClient
  ) { }

  getCards(){
    return this.http.get(this.cardsUrl)
      .pipe(
        delay(500)
      )
  }

  getCard(id: number){
    const url = `${this.cardsUrl}/${id}`;
    return this.http.get(url);
  }
  editCard(id: number){}
  deleteCard(id: number){
    console.log('*id*', id);
    const url = `${this.cardsUrl}/${id}`;
    return this.http.delete(url);
  }

  addCard(){}
}
