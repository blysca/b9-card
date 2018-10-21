import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardsService} from "../../services/cards.service";
import {Card} from "../../interfaces/card";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  cards: Card[];
  sub: Subscription;

  constructor(
    private cardsService: CardsService
  ) {
  }

  ngOnInit() {
    this.sub = this.cardsService.getCards()
      .subscribe(
        (cards: Card[]) => this.cards = cards,
        error => console.warn('*error* = ', error),
        () => console.log('*-- getCards completed*')
      );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
