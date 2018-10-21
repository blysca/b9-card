import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {DetailComponent} from "../detail/detail.component";
import {CardsService} from "../../services/cards.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() card;

  sub: Subscription;

  constructor(
    public dialog: MatDialog
    , private cardsService: CardsService
  ) { }

  ngOnInit() {}

  openDetail(): void {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '480px',
      data: this.card
    });

    dialogRef.afterClosed().subscribe(
      () => console.log('The dialog was closed')
    );
  }

  onDelete(): void {
    this.sub = this.cardsService
      .deleteCard(+this.card.id)
      .subscribe(
        (res) => console.log('**', res)
        , (error) => console.log('**', error)
        , () => console.log('** complete')
      );

  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
