import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, delay} from "rxjs/operators";
import {Card} from "../interfaces/card";
import {Observable} from "rxjs";

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

  updateCard(card: Card) {
    const url = `${this.cardsUrl}/${card.id}`;
    return this.http.put<Card>(url, card);
  }


  deleteCard(id: number){
    console.log('*id*', id);
    const url = `${this.cardsUrl}/${id}`;
    return this.http.delete(url);
  }

  addCard(card){
    return this.http.post(this.cardsUrl, card)
      .pipe(
        delay(500)
      )
  }
}
